
```dataviewjs

dv.span("Projeto")

const calendarData = {
    colors: {
	    blue:["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"]
    },
    showCurrentDayBorder: false,
    intensityScaleStart: 10,
    intensityScaleEnd: 100,
    entries: []
}

for(let page of dv.pages('"00 - Diário"').where(p=>p.project)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.project,
        content: await dv.span(`[](${page.file.name})`)
    })   
}

renderHeatmapCalendar(this.container, calendarData)
```