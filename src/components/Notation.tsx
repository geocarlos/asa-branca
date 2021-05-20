import { useCallback, useEffect, useRef } from "react";
import Vex from 'vexflow';

const VF = Vex.Flow;

const Notation = () => {
	const container = useRef<any>();

	const renderScore = useCallback((el: HTMLElement) => {
		/* This is code from the tutorial */

		// Create an SVG renderer and attach it to the DIV element to it.
		const renderer = new VF.Renderer(el, VF.Renderer.Backends.SVG);

		// Size our SVG:
		renderer.resize(850, 500);

		// And get a drawing context:
		const context = renderer.getContext();
		const staveMeasure1 = new Vex.Flow.Stave(10, 0, 300);
		staveMeasure1.addClef("treble").setContext(context).draw();
	  
		const notesMeasure1 = [
			/*Maybe a better way to create an array of notes can be implemented 
				For now, it is like in the tutorial.
			*/
		  new VF.StaveNote({ keys: ["c/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["d/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["b/4"], duration: "8r" }),
		  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "8" }),
		];
	  
		// Helper function to justify and draw a 4/4 voice
		VF.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);
	  
		// measure 2 - juxtaposing second measure next to first measure
		const staveMeasure2 = new Vex.Flow.Stave(
		  staveMeasure1.getWidth() + staveMeasure1.getX(),
		  0,
		  400
		);
		staveMeasure2.setContext(context).draw();
	  
		const notesMeasure2_part1 = [
		  new VF.StaveNote({ keys: ["c/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["d/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["b/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "8" }),
		];
	  
		const notesMeasure2_part2 = [
		  new VF.StaveNote({ keys: ["c/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["d/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["b/4"], duration: "8" }),
		  new VF.StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "8" }),
		];
	  
		// create the beams for 8th notes in 2nd measure
		const beam1 = new Vex.Flow.Beam(notesMeasure2_part1);
		const beam2 = new Vex.Flow.Beam(notesMeasure2_part2);
	  
		const notesMeasure2 = notesMeasure2_part1.concat(notesMeasure2_part2);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);
	  
		// Render beams
		beam1.setContext(context).draw();
		beam2.setContext(context).draw();

	}, [])

	useEffect(() => {
		if (container.current) {
			renderScore(container.current);
		}
	}, [container, renderScore]);

	return <div ref={container}></div>
}

export default Notation;