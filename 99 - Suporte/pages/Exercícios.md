
```dataviewjs

dv.span("🏋️ Exercícios 🏋️")

const calendarData = {
    colors: {
        red: ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"]
    },
    showCurrentDayBorder: false,
    intensityScaleStart: 10,
    intensityScaleEnd: 100,
    entries: []
}

for(let page of dv.pages('"00 - Diário"').where(p=>p.exercise)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.exercise,
        content: await dv.span(`[](${page.file.name})`)
    })
}

renderHeatmapCalendar(this.container, calendarData)
```
