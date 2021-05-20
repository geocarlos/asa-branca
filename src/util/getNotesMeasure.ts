import Vex from 'vexflow';

const getNotesMeasure = (notes: any[]) => {
	return notes.map(note => new Vex.Flow.StaveNote({keys: note[0], duration: note[1]}));
}

export default getNotesMeasure;