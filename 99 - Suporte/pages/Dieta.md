
```dataviewjs

dv.span("Dieta")

const calendarData = {
    colors: {
        orange: ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"]
    },
    showCurrentDayBorder: true,
    intensityScaleStart: 10,
    intensityScaleEnd: 100,
    entries: []
}

for(let page of dv.pages('"00 - Diário"').where(p=>p.diet)){
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.diet,
        content: await dv.span(`[](${page.file.name})`)
    })   
}

renderHeatmapCalendar(this.container, calendarData)
```


