var tasks = [
    {
      id: 'Task 1',
      name: 'Ecriture du CDC',
      start: '2021-07-20',
      end: '2021-07-22',
      progress: 90,
      dependencies: ''
    },
    {
        id: 'Task 2',
        name: 'Afficher commits (No-Change)',
        start: '2021-07-22',
        end: '2021-07-27',
        progress: 60,
        dependencies: ''
    },
    {
        id: 'Task 3',
        name: 'Créer page Web',
        start: '2021-07-27',
        end: '2021-07-29',
        progress: 0,
        dependencies: 'Task 2'
    },
    {
        id: 'Task 4',
        name: 'Triage des commits',
        start: '2021-07-29',
        end: '2021-08-05',
        progress: 0,
        dependencies: 'Task 3'
    },
    {
        id: 'Task 5',
        name: 'Paramètres',
        start: '2021-08-05',
        end: '2021-08-07',
        progress: 0,
        dependencies: 'Task 4'
    },
    {
        id: 'Task 6',
        name: 'FIN',
        start: '2021-08-07',
        end: '2021-08-08',
        progress: 0,
        dependencies: 'Task 5',
    },
]

var gantt_chart = new Gantt("#gantt-1", tasks, {
    header_height: 50,
	column_width: 30,
	step: 24,
	view_modes: ['Quarter Day', 'Half Day', 'Day', 'Week', 'Month'],
	bar_height: 20,
	bar_corner_radius: 3,
	arrow_curve: 5,
	padding: 18,
	view_mode: 'Half Day',   
	date_format: 'YYYY-MM-DD HH:mm:ss.SSS',
	language: 'fr',
	custom_popup_html: null
});