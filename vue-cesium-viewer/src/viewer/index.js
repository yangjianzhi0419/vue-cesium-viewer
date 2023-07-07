import Viewer from "./Viewer";

Viewer.install = Vue => {
    Vue.component(Viewer.name, Viewer);
}

export default Viewer;
