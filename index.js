import {TrillionWidgetApp} from "https://unpkg.com/trillion-widget@0.16.5/build-lib/trillion-widget.js"
import {TrillionViewerApp} from "https://unpkg.com/trillion-viewer@0.16.5/build-lib/trillion-viewer.js"
import {jewelryExists} from "./checkJewelryExist.js"

const widget = document.getElementById('trillion-widget')
const viewer = document.getElementById('trillion-viewer')
const trillionWidget = new TrillionWidgetApp()
const trillionViewer = new TrillionViewerApp()
const widgetBtn = document.getElementById('widgetBtn')
const viewerBtn = document.getElementById('viewerBtn')
const closeBtn = document.querySelector('.closeBtn')

widgetBtn.addEventListener('click', () => {
    widget.classList.add('show')
    closeBtn.classList.add('show')

    trillionWidget.init(widget)
    trillionWidget.setJewelryID('ring_demo_store')
    trillionWidget.refresh()
})

viewerBtn.addEventListener('click', () => {
    viewer.classList.add('show')
    closeBtn.classList.add('show')

    trillionViewer.init(viewer)
    trillionViewer.setLoaderTheme('darkOnLight')
    trillionViewer.setJewelryID('ring_demo_store')
    trillionViewer.refresh()
})

closeBtn.addEventListener('click', () => {
    widget.classList.remove('show')
    viewer.classList.remove('show')
    closeBtn.classList.remove('show')

    trillionWidget.destroy()
    trillionViewer.destroy()
})



jewelryExists('ring_demo_store')
    .then(result => {
        if(result) {
            viewerBtn.classList.add('active')
            widgetBtn.classList.add('active')
        }
    })
    .catch(error => {
        console.error(error);
    });