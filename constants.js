module.exports = {
	CMDS:
		{
			GET_INFO: 0x01,
			SET_BURNER_MODE: 0x03, // TODO
			GET_BURNER_SETTINGS: 0x04, // TODO
		},
	BURNER_MODES: {
		STANDBY: 0x0,
		AUTO: 0x1,
		TIMER: 0x2,
	},
	PRIORITY_MODES: {
		CH_PRIORITY: 0x0,
		DHW_PRIORITY: 0x1,
		PARALLEL_PUMPS: 0x2,
		SUMMER_MODE: 0x3,
	},
	COMMAND_HEADER: [0x5a, 0x5a],
};
