import { useCallback, useEffect, useRef } from "react";
import Vex from 'vexflow';
import getNotesMeasure from '../util/getNotesMeasure';

const VF = Vex.Flow;

const Notation = () => {
	const container = useRef<any>();

	const renderScore = useCallback((el: HTMLElement) => {
		const renderer = new VF.Renderer(el, VF.Renderer.Backends.SVG);

		renderer.resize(900, 500);

		const context = renderer.getContext();
		const staveMeasure1 = new Vex.Flow.Stave(10, 0, 200);
		staveMeasure1.addClef("treble").addTimeSignature('2/4')
		staveMeasure1.setContext(context).draw();

		const notesMeasure1 = getNotesMeasure([[["c/4"], "8"], [["d/4"], "8"]]);

		const beam1 = new Vex.Flow.Beam(notesMeasure1);

		VF.Formatter.FormatAndDraw(context, staveMeasure1, notesMeasure1);

		beam1.setContext(context).draw();

		const staveMeasure2 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			0,
			200
		);
		staveMeasure2.setContext(context).draw();

		const notesMeasure2 = getNotesMeasure([[["e/4"], "q"], [["g/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure2, notesMeasure2);

		const staveMeasure3 = new Vex.Flow.Stave(
			2 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			0,
			200
		);

		staveMeasure3.setContext(context).draw();

		const notesMeasure3 = getNotesMeasure([[["g/4"], "q"], [["e/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure3, notesMeasure3);

		const staveMeasure4 = new Vex.Flow.Stave(
			3 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			0,
			200
		);

		staveMeasure4.setContext(context).draw();

		const notesMeasure4 = getNotesMeasure([[["f/4"], "2"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure4, notesMeasure4);

		const staveMeasure5 = new Vex.Flow.Stave(
			10,
			100,
			200
		);

		staveMeasure5.setContext(context).draw();

		const rest = getNotesMeasure([[["b/4"], "qr"]])

		const notesMeasure5 = getNotesMeasure([[["c/4"], "8"], [["d/4"], "8"]]);

		const beam2 = new Vex.Flow.Beam(notesMeasure5);

		VF.Formatter.FormatAndDraw(context, staveMeasure5, rest.concat(notesMeasure5));

		beam2.setContext(context).draw();

		const staveMeasure6 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			100,
			200
		);
		staveMeasure6.setContext(context).draw();

		const notesMeasure6 = getNotesMeasure([[["e/4"], "q"], [["g/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure6, notesMeasure6);

		const staveMeasure7 = new Vex.Flow.Stave(
			2 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			100,
			200
		);

		staveMeasure7.setContext(context).draw();

		const notesMeasure7 = getNotesMeasure([[["g/4"], "q"], [["f/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure7, notesMeasure7);

		const staveMeasure8 = new Vex.Flow.Stave(
			3 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			100,
			200
		);

		staveMeasure8.setContext(context).draw();

		const notesMeasure8 = getNotesMeasure([[["e/4"], "2"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure8, notesMeasure8);

		const staveMeasure9 = new Vex.Flow.Stave(
			10,
			200,
			200
		);

		staveMeasure9.addModifier(new Vex.Flow.Repetition(Vex.Flow.Repetition.type.NONE, 20, 50), Vex.Flow.StaveModifier.Position.LEFT);
		staveMeasure9.setContext(context).draw();

		const rest2 = getNotesMeasure([[["b/4"], "8r"]])

		const notesMeasure9 = getNotesMeasure([[["c/4"], "8"], [["c/4"], "8"], [["d/4"], "8"]]);

		const beam3 = new Vex.Flow.Beam(notesMeasure9);

		VF.Formatter.FormatAndDraw(context, staveMeasure9, rest2.concat(notesMeasure9));

		beam3.setContext(context).draw();

		const staveMeasure10 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			200,
			200
		);
		staveMeasure10.setContext(context).draw();

		const notesMeasure10 = getNotesMeasure([[["e/4"], "q"], [["g/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure10, notesMeasure10);

		const staveMeasure11 = new Vex.Flow.Stave(
			2 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			200,
			200
		);

		staveMeasure11.setContext(context).draw();

		const rest3 = getNotesMeasure([[["b/4"], "8r"]])

		const notesMeasure11 = getNotesMeasure([[["g/4"], "8"], [["f/4"], "8"], [["e/4"], "8"]]);

		const beam4 = new Vex.Flow.Beam(notesMeasure11);

		VF.Formatter.FormatAndDraw(context, staveMeasure11, rest3.concat(notesMeasure11));

		beam4.setContext(context).draw();

		const staveMeasure12 = new Vex.Flow.Stave(
			3 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			200,
			200
		);
		staveMeasure12.setContext(context).draw();

		const notesMeasure12 = getNotesMeasure([[["c/4"], "q"], [["f/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure12, notesMeasure12);
		
		const staveMeasure13 = new Vex.Flow.Stave(
			10,
			300,
			200
		);

		staveMeasure13.setContext(context).draw();

		const rest4 = getNotesMeasure([[["b/4"], "8r"]])

		const notesMeasure13 = getNotesMeasure([[["f/4"], "8"], [["e/4"], "8"], [["d/4"], "8"]]);

		const beam5 = new Vex.Flow.Beam(notesMeasure13);

		VF.Formatter.FormatAndDraw(context, staveMeasure13, rest4.concat(notesMeasure13));

		beam5.setContext(context).draw();

		const staveMeasure14 = new Vex.Flow.Stave(
			staveMeasure1.getWidth() + staveMeasure1.getX(),
			300,
			200
		);
		staveMeasure14.setContext(context).draw();

		const notesMeasure14 = getNotesMeasure([[["d/4"], "q"], [["e/4"], "q"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure14, notesMeasure14);
	
		const staveMeasure15 = new Vex.Flow.Stave(
			2 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			300,
			200
		);

		staveMeasure15.setContext(context).draw();

		const rest5 = getNotesMeasure([[["b/4"], "8r"]])

		const notesMeasure15 = getNotesMeasure([[["d/4"], "8"], [["d/4"], "8"], [["c/4"], "8"]]);

		const beam6 = new Vex.Flow.Beam(notesMeasure15);

		VF.Formatter.FormatAndDraw(context, staveMeasure15, rest5.concat(notesMeasure15));

		beam6.setContext(context).draw();

		const staveMeasure16 = new Vex.Flow.Stave(
			3 * staveMeasure1.getWidth() + staveMeasure1.getX(),
			300,
			200
		);
		staveMeasure16.setContext(context).draw();

		const notesMeasure16 = getNotesMeasure([[["c/4"], "2"]]);

		Vex.Flow.Formatter.FormatAndDraw(context, staveMeasure16, notesMeasure16);

	}, [])

	useEffect(() => {
		if (container.current) {
			renderScore(container.current);
		}
	}, [container, renderScore]);

	return <div ref={container}></div>
}

export default Notation;