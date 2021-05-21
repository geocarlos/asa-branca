import * as Tone from 'tone';

const Sound = () => {
	const play = () => {
		const synth = new Tone.Synth().toDestination();
		const now = Tone.now()
		synth.triggerAttackRelease("C4", "8n", now)
		synth.triggerAttackRelease("D4", "8n", now + 0.5)
		synth.triggerAttackRelease("E4", "4n", now + 1)
		synth.triggerAttackRelease("G4", "4n", now + 2)
		synth.triggerAttackRelease("G4", "4n", now + 3)
		synth.triggerAttackRelease("E4", "4n", now + 4)
		synth.triggerAttackRelease("F4", "2n", now + 5)

		synth.triggerAttackRelease("C4", "8n", now + 8)
		synth.triggerAttackRelease("D4", "8n", now + 8.5)
		synth.triggerAttackRelease("E4", "4n", now + 9)
		synth.triggerAttackRelease("G4", "4n", now + 10)
		synth.triggerAttackRelease("G4", "4n", now + 11)
		synth.triggerAttackRelease("F4", "4n", now + 12)
		synth.triggerAttackRelease("E4", "2n", now + 13)

		synth.triggerAttackRelease("C4", "8n", now + 15.5)
		synth.triggerAttackRelease("C4", "8n", now + 16)
		synth.triggerAttackRelease("D4", "8n", now + 16.5)

		synth.triggerAttackRelease("E4", "4n", now + 17)
		synth.triggerAttackRelease("G4", "4n", now + 18)
		
		synth.triggerAttackRelease("G4", "8n", now + 19.5)
		synth.triggerAttackRelease("F4", "8n", now + 20)
		synth.triggerAttackRelease("E4", "8n", now + 20.5)

		synth.triggerAttackRelease("C4", "4n", now + 21)
		synth.triggerAttackRelease("F4", "4n", now + 22)

		synth.triggerAttackRelease("F4", "8n", now + 23.5)
		synth.triggerAttackRelease("E4", "8n", now + 24)
		synth.triggerAttackRelease("D4", "8n", now + 24.5)

		synth.triggerAttackRelease("D4", "4n", now + 25)
		synth.triggerAttackRelease("E4", "4n", now + 26)

		synth.triggerAttackRelease("D4", "8n", now + 27.5)
		synth.triggerAttackRelease("D4", "8n", now + 28)
		synth.triggerAttackRelease("C4", "8n", now + 28.5)

		synth.triggerAttackRelease("C4", "2n", now + 29)
	}

	return <div><button onClick={play}>Play</button></div>
}

export default Sound;