import { useCallback, useEffect, useRef } from "react";
import Vex from 'vexflow';
import getNotesMeasure from '../util/getNotesMeasure';

const VF = Vex.Flow;

const Notation = () => {
	const container = useRef<any>();

	const renderScore = useCallback((el: HTMLElement) => {
		const renderer = new VF.Renderer(el, VF.Renderer.Backends.SVG);

		renderer.resize(850, 500);

		const context = renderer.getContext();
		const staveMeasure1 = new Vex.Flow.Stave(10, 0, 300);
		staveMeasure1.addClef("treble").addTimeSignature('2/4')
		staveMeasure1.setContext(context).draw();

		const notesMeasure1 = getNotesMeasure([[["c/4"], "8"], [["d/4"], "8"]]);	  
	  
		const beam1 = new Vex.Flow.Beam(notesMeasure1);
	  
		VF.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);

		beam1.setContext(context).draw();
	  
		const staveMeasure2 = new Vex.Flow.Stave(
		  staveMeasure1.getWidth() + staveMeasure1.getX(),
		  0,
		  300
		);
		staveMeasure2.setContext(context).draw();

		const notesMeasure2 = getNotesMeasure([[["e/4"], "q"], [["g/4"], "q"]]);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);

		const staveMeasure3 = new Vex.Flow.Stave(
			10,
			100,
			300
		  );

		staveMeasure3.setContext(context).draw();

		const notesMeasure3 = getNotesMeasure([[["g/4"], "q"], [["e/4"], "q"]]);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure3, notesMeasure3);

		const staveMeasure4 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			100,
			300
		  );

		staveMeasure4.setContext(context).draw();

		const notesMeasure4 = getNotesMeasure([[["f/4"], "2"]]);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure4, notesMeasure4);

		const staveMeasure5 = new Vex.Flow.Stave(
			10,
			200,
			300
		  );

		staveMeasure5.setContext(context).draw();

		const rest = getNotesMeasure([[["b/4"], "qr"]])

		const notesMeasure5 = getNotesMeasure([[["c/4"], "8"], [["d/4"], "8"]]);	  
	  
		const beam2 = new Vex.Flow.Beam(notesMeasure5);
	  
		VF.Formatter.FormatAndDraw(context, staveMeasure5, rest.concat(notesMeasure5));

		beam2.setContext(context).draw();

		const staveMeasure6 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			200,
			300
		  );
		  staveMeasure6.setContext(context).draw();
  
		  const notesMeasure6 = getNotesMeasure([[["e/4"], "q"], [["g/4"], "q"]]);
		
		  Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure6, notesMeasure6);

		  const staveMeasure7 = new Vex.Flow.Stave(
			10,
			300,
			300
		  );

		staveMeasure7.setContext(context).draw();

		const notesMeasure7 = getNotesMeasure([[["g/4"], "q"], [["f/4"], "q"]]);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure7, notesMeasure7);

		const staveMeasure8 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			300,
			300
		  );

		staveMeasure8.setContext(context).draw();

		const notesMeasure8 = getNotesMeasure([[["e/4"], "2"]]);
	  
		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure8, notesMeasure8);
	
	}, [])

	useEffect(() => {
		if (container.current) {
			renderScore(container.current);
		}
	}, [container, renderScore]);

	return <div ref={container}></div>
}

export default Notation;