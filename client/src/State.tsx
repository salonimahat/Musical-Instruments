// 3rd party
import { List, Map } from 'immutable';

// project dependencies
import { PianoInstrument } from './instruments/Piano';
import { WaveformVisualizer } from './visualizers/Waveform';


import { RingVisualizer } from "./visualizers/Visualizer1";
import { GuitarInstrument } from "./instruments/Guitar";
import { BongoInstrument } from "./instruments/Bongo";

import { FluteInstrument } from "./instruments/Flute";
import { XylophoneInstrument } from "./instruments/Xylophone";


import { WallCurtainVisualizer } from './visualizers/Visualizer3';
import { CrossSquareVisualizer } from "./visualizers/Visualizer4";



/** ------------------------------------------------------------------------ **
 * The entire application state is stored in AppState.
 ** ------------------------------------------------------------------------ */

/**
 * Observation: pure map (compare and contrast with impure map)
 *
 * 'instrument': Instrument
 * 'visualizer': Visualizer
 */
export type AppState = Map<string, any>;

const instruments = List([PianoInstrument,
  GuitarInstrument, //Pramodkhatri10
  FluteInstrument, //seelapant13
  BongoInstrument,  //salonimahat instrument
  XylophoneInstrument //rujarajbhandari
]);
const visualizers = List([WaveformVisualizer,
  RingVisualizer,  //Pramodkhatri10
  WallCurtainVisualizer, //salonimahat visualizer
  CrossSquareVisualizer, //rujarajbhandari

]);


export const defaultState: AppState = Map<string, any>({
  instruments,
  visualizers,
});
