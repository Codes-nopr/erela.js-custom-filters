const erela = require('erela.js');

module.exports.FilterManager = class FilterManager extends erela.Plugin {
    load() {
        erela.Structure.extend('Player', (Player) => class extends Player {
            constructor() {
                super(...arguments);
                // Private
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                /**  Filters Data, don't modify **/

                this.bassFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.7 },
                        { band: 2, gain: 0.8 },
                        { band: 3, gain: 0.55 },
                        { band: 4, gain: 0.25 },
                        { band: 5, gain: 0 },
                        { band: 6, gain: -0.25},
                        { band: 7, gain: -0.45 },
                        { band: 8, gain: -0.55 },
                        { band: 9, gain: -0.7 },
                        { band: 10, gain: -0.3 },
                        { band: 11, gain: -0.25 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }   
                    ]
                };

                this.bassboostFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 }
                    ]
                };

                this.bassboosthighFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.1875 },
                        { band: 1, gain: 0.375 },
                        { band: 2, gain: -0.375 },
                        { band: 3, gain: -0.1875 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: -0.0125 },
                        { band: 6, gain: -0.025 },
                        { band: 7, gain: -0.0175 },
                        { band: 8, gain: 0 },
                        { band: 9, gain: 0 },
                        { band: 10, gain: 0.0125 },
                        { band: 11, gain: 0.025 },
                        { band: 12, gain: 0.375 },
                        { band: 13, gain: 0.125 },
                        { band: 14, gain: 0.125 }
                    ]
                };

                this.classicalFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.375 },
                        { band: 1, gain: 0.350 },
                        { band: 2, gain: 0.125 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: 0.125 },
                        { band: 6, gain: 0.550 },
                        { band: 7, gain: 0.050 },
                        { band: 8, gain: 0.125 },
                        { band: 9, gain: 0.250 },
                        { band: 10, gain: 0.200 },
                        { band: 11, gain: 0.250 },
                        { band: 12, gain: 0.300 },
                        { band: 13, gain: 0.250 },
                        { band: 14, gain: 0.300 }
                    ]
                };

                this.darthvadorFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    timescale: {
                        speed: 0.975,
                        pitch: 0.5,
                        rate: 0.8
                    }
                };

                this.eightdFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    rotation: {
                        rotationHz: 0.2
                    }
                };

                this.electronicFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.375 },
                        { band: 1, gain: 0.350 },
                        { band: 2, gain: 0.125 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: 0 },
                        { band: 5, gain: -0.125 },
                        { band: 6, gain: -0.125 },
                        { band: 7, gain: 0 },
                        { band: 8, gain: 0.25 },
                        { band: 9, gain: 0.125 },
                        { band: 10, gain: 0.15 },
                        { band: 11, gain: 0.2 },
                        { band: 12, gain: 0.250 },
                        { band: 13, gain: 0.350 },
                        { band: 14, gain: 0.400 }
                    ]
                };

                this.errapeFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band:0, gain: 0.25 },
                        { band: 1, gain: 0.5 },
                        { band: 2, gain: -0.5 },
                        { band: 3, gain: -0.25 },
                        { band: 4, gain: 0 },
                        { band: 6, gain: -0.025 },
                        { band: 7, gain: -0.0175 },
                        { band: 8, gain: 0 },
                        { band: 9, gain: 0 },
                        { band: 10, gain: 0.0125 },
                        { band: 11, gain: 0.025 },
                        { band: 12, gain: 0.375 },
                        { band: 13, gain: 0.125 },
                        { band: 14, gain: 0.125 }
                    ]
                };
                
                this.gamingFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.350 },
                        { band: 1, gain: 0.300 },
                        { band: 2, gain: 0.250 },
                        { band: 3, gain: 0.200 },
                        { band: 4, gain: 0.150 },
                        { band: 5, gain: 0.100 },
                        { band: 6, gain: 0.050 },
                        { band: 7, gain: -0.0 },
                        { band: 8, gain: -0.050 },
                        { band: 9, gain: -0.100 },
                        { band: 10, gain: -0.150 },
                        { band: 11, gain: -0.200 },
                        { band: 12, gain: -0.250 },
                        { band: 13, gain: -0.300 },
                        { band: 14, gain: -0.350 }
                    ]
                };

                this.highfullFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.25 + 0.375 },
                        { band: 1, gain: 0.25 + 0.025 },
                        { band: 2, gain: 0.25 + 0.0125 },
                        { band: 3, gain: 0.25 },
                        { band: 4, gain: 0.25 },
                        { band: 5, gain: 0.25 + -0.0125  },
                        { band: 6, gain: 0.25 + -0.025 },
                        { band: 7, gain: 0.25 + 0.0175 },
                        { band: 8, gain: 0.25 },
                        { band: 9, gain: 0.25 },
                        { band: 10, gain: 0.25 + 0.0125 },
                        { band: 11, gain: 0.25 + 0.025 },
                        { band: 12, gain: 0.25 + 0.375 },
                        { band: 13, gain: 0.25 + 0.125 },
                        { band: 14, gain: 0.25 + 0.125 }
                    ]
                };

                this.highvoiceFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -2.0 },
                        { band: 1, gain: -2.0 },
                        { band: 2, gain: -5.0 },
                        { band: 3, gain: 4 },
                        { band: 4, gain: 3 },
                        { band: 5, gain: 1 },
                        { band: 6, gain: 0.1 },
                        { band: 7, gain: 2.2 },
                        { band: 8, gain: 0.5 }
                    ]
                };

                this.karaokeFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    karaoke: {
                        level: 1.0,
                        monoLevel: 1.0,
                        filterBand: 220.0,
                        filterWidth: 100.0
                    }
                };

                this.nightcoreFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    timescale: {
                        speed: 1.2999999523162842,
                        pitch: 1.2999999523162842,
                        rate: 1,
                    }
                };

                this.partyFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -1.16 },
                        { band: 1, gain: 0.28 },
                        { band: 2, gain: 0.42 },
                        { band: 3, gain: 0.5 },
                        { band: 4, gain: 0.36 },
                        { band: 5, gain: 0 },
                        { band: 6, gain: -0.3},
                        { band: 7, gain: -0.21 },
                        { band: 8, gain: -0.21 }
                    ]
                };

                this.popFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: -0.25 },
                        { band: 1, gain: 0.48 },
                        { band: 2, gain: 0.59 },
                        { band: 3, gain: 0.72 },
                        { band: 4, gain: 0.56 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.24},
                        { band: 7, gain: -0.24 },
                        { band: 8, gain: -0.16 },
                        { band: 9, gain: -0.16 },
                        { band: 10, gain: 0 },
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }
                    ]
                };

                this.radioFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.65 },
                        { band: 1, gain: 0.45 },
                        { band: 2, gain: -0.45 },
                        { band: 3, gain: -0.65 },
                        { band: 4, gain: -0.35 },
                        { band: 5, gain: 0.45 },
                        { band: 6, gain: 0.55},
                        { band: 7, gain: 0.6 },
                        { band: 8, gain: 0.6 },
                        { band: 9, gain: 0.6 },
                        { band: 10, gain: 0 },
                        { band: 11, gain: 0 },
                        { band: 12, gain: 0 },
                        { band: 13, gain: 0 },
                        { band: 14, gain: 0 }
                    ]
                };

                this.rockFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.300 },
                        { band: 1, gain: 0.250 },
                        { band: 2, gain: 0.200 },
                        { band: 3, gain: 0.100 },
                        { band: 4, gain: 0.050 },
                        { band: 5, gain: -0.050 },
                        { band: 6, gain: -0.150 },
                        { band: 7, gain: -0.200 },
                        { band: 8, gain: -0.100 },
                        { band: 9, gain: -0.050 },
                        { band: 10, gain: 0.050 },
                        { band: 11, gain: 0.100 },
                        { band: 12, gain: 0.200 },
                        { band: 13, gain: 0.250 },
                        { band: 14, gain: 0.300 }
                    ]
                };

                this.softFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    lowPass: {
                        smoothing: 20.0
                    }
                };

                this.superfastFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    timescale: {
						speed: 1.5010,
						pitch: 1.2450,
						rate: 1.9210
					}
                };

                this.treblebassFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 0, gain: 0.6 },
                        { band: 1, gain: 0.67 },
                        { band: 2, gain: 0.67 },
                        { band: 3, gain: 0 },
                        { band: 4, gain: -0.5 },
                        { band: 5, gain: 0.15 },
                        { band: 6, gain: -0.45 },
                        { band: 7, gain: 0.23 },
                        { band: 8, gain: 0.35 },
                        { band: 9, gain: 0.45 },
                        { band: 10, gain: 0.55 },
                        { band: 11, gain: 0.6 },
                        { band: 12, gain: 0.55 },
                        { band: 13, gain: 0 },
                    ]
                };

                this.tremoloFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    tremolo: {
                        frequency: 10,
                        depth: 0.5
                    }
                };

                this.vaporewaveFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    equalizer: [
                        { band: 1, gain: 0.3 },
                        { band: 0, gain: 0.3 },
                    ],
                    timescale: { pitch: 0.5 },
                    tremolo: { depth: 0.3, frequency: 14 }
                };

                this.vibratoFilter = {
                    op: 'filters',
                    guildId: this.guild,
                    vibrato: {
                        frequency: 10,
                        depth: 0.9
                    }
                };

                this.resetFilters = {
                    op: 'filters',
                    guildId: this.guild
                };
            }

            set bass(state) {
                this._bass = state;

                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.bassFilter);
                } else {
                    this.removeFilter();
                }
            }

            set bassboost(state) {
                this._bassboost = state;

                this._bass = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.bassboostFilter);
                } else {
                    this.removeFilter();
                }
            }

            set bassboosthigh(state) {
                this._bassboosthigh = state;

                if (state) {
                    this.node.send(this.bassboosthighFilter);
                } else {
                    this.removeFilter();
                }
            }

            set classical(state) {
                this._classical = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.classicalFilter);
                } else {
                    this.removeFilter();
                }
            }

            set darthvador(state) {
                this._darthvador = state;
                
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.darthvadorFilter);
                } else {
                    this.removeFilter();
                }

            }

            set eightd(state) {
                this._eightd = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.eightdFilter);
                } else {
                    this.removeFilter();
                }
            }

            set electronic(state) {
                this._electronic = state;
                
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.electronicFilters);
                } else {
                    this.removeFilter();
                }
            }

            set errape(state) {
                this._errape = state;
                
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.errapeFilter);
                } else {
                    this.removeFilter();
                }
            }

            set gaming(state) {
                this._gaming = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.gamingFilter);
                } else {
                    this.removeFilter();
                }
            }

            set highfull(state) {
                this._highfull = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.highfullFilter);
                } else {
                    this.removeFilter();
                }
            }

            set highvoice(state) {
                this._highvoice = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.highvoiceFilter);
                } else {
                    this.removeFilter();
                }
            }

            set karaoke(state) {
                this._karaoke = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.karaokeFilter);
                } else {
                    this.removeFilter();
                }
            }

            set nightcore(state) {
                this._nightcore = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.nightcoreFilter);
                } else {
                    this.removeFilter();
                }
            }

            set party(state) {
                this._party = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.partyFilter);
                } else {
                    this.removeFilter();
                }
            }

            set pop(state) {
                this._pop = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.popFilter);
                } else {
                    this.removeFilter();
                }
            }

            set radio(state) {
                this._radio = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.radioFilter);
                } else {
                    this.removeFilter();
                }
            }

            set rock(state) {
                this._rock = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.rockFilter);
                } else {
                    this.removeFilter();
                }
            }

            set soft(state) {
                this._soft = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.softFilter);
                } else {
                    this.removeFilter();
                }
            }

            set superfast(state) {
                this._superfast = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.superfastFilter);
                } else {
                    this.removeFilter();
                }
            }

            set treblebass(state) {
                this._treblebass = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
                
                if (state) {
                    this.node.send(this.treblebassFilter);
                } else {
                    this.removeFilter();
                }
            }

            set tremolo(state) {
                this.tremolo = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._vaporewave = false;
                this._vibrato = false;
                
                if (state) {
                    this.node.send(this.tremoloFilter);
                } else {
                    this.removeFilter();
                }
            }

            set vaporewave(state) {
                this._vaporewave = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vibrato = false;

                if (state) {
                    this.node.send(this.vaporewaveFilter);
                } else {
                    this.removeFilter();
                }
            }

            set vibrato(state) {
                this._vibrato = state;

                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;

                if (state) {
                    this.node.send(this.vibratoFilter);
                } else {
                    this.removeFilter();
                }
            }

            // Get filters state <On / Off>
            
            get bass() {
                return this._bass;
            }
            
            get bassboost() {
                return this._bassboost;
            }

            get classical() {
                return this._classical;
            }

            get darthvador() {
                return this._darthvador;
            }

            get eightd() {
                return this._eightd;
            }

            get electronic() {
                return this._electronic;
            }

            get errape() {
                return this._errape;
            }

            get gaming() {
                return this._gaming;
            }

            get highfull() {
                return this._highfull;
            }

            get highvoice() {
                return this._highvoice;
            }

            get karaoke() {
                return this._karaoke;
            }

            get nightcore() {
                return this._nightcore;
            }

            get party() {
                return this._party;
            }

            get pop() {
                return this._pop;
            }

            get radio() {
                return this._radio;
            }

            get rock() {
                return this._rock;
            }

            get soft() {
                return this._soft;
            }

            get superfast() {
                return this._superfast;
            }

            get treblebass() {
                return this._treblebass;
            }

            get tremolo() {
                return this._tremolo;
            }

            get vaporewave() {
                return this._vaporewave;
            }

            get vibrato() {
                return this._vibrato;
            }

            removeFilter() {
                this.node.send(this.resetFilters);
            }

            removeAllFilters() {
                this.removeFilter();
                this._bass = false;
                this._bassboost = false;
                this._bassboosthigh = false;
                this._classical = false;
                this._darthvador = false;
                this._eightd = false;
                this._electronic = false;
                this._errape = false;
                this._gaming = false;
                this._highfull = false;
                this._highvoice = false;
                this._karaoke = false;
                this._nightcore = false;
                this._party = false;
                this._pop = false;
                this._radio = false;
                this._rock = false;
                this._soft = false;
                this._superfast = false;
                this._treblebass = false;
                this._tremolo = false;
                this._vaporewave = false;
                this._vibrato = false;
            }
        })
    }
}
