
```dataviewjs
dv.span("Acordar Cedo")
const calendarData = {
    colors: {
        green: ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"]
    },
    showCurrentDayBorder: false,
    intensityScaleStart: 10,
    intensityScaleEnd: 100,
    entries: []
}

for(let page of dv.pages('"00 - Diário"').where(p=>p.early_wake_up)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.early_wake_up,
        content: await dv.span(`[](${page.file.name})`)
    }) 
}

renderHeatmapCalendar(this.container, calendarData)
```
