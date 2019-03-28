// console.log('app.js is running');

// // JSX - JavaScript XML

// //CALCULATOR
// /*
// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
// const template = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// );
// const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);
// }

// renderCounterApp(); 
// */

// // INDECISION APP

// const app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer',
//     options: []
// }
// const appRoot2 = document.getElementById('app2');


// const onFormSubmit = e => {
//     e.preventDefault();

//     const option = e.target.elements.option.value;
//     if(option) {
//         app.options.push(option);
//         e.target.elements.option.value = '';
//     }
//     renderApp();
// };
// const onRemoveAll = () => {
//     app.options = [];
//     renderApp();
// }

// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];

//     alert(option);
// };

// const renderApp = () => {
// const template2 = (
//     <div>
//         {app.title && <h1> {app.title} </h1>}
//         <p>{app.subtitle}</p>
//         <p>{app.options.length > 0 ? 'Here are your options:' : 'No options'}</p>
//         <p>{app.options.length}</p>
//         <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
//         <button onClick={onRemoveAll}>Remove all items</button>
//         <ol>
//             {
//                 app.options.map((item) => <li key={item}>{item}</li>)

//             }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add option</button>
//         </form>
//     </div>
// );
// ReactDOM.render(template2, appRoot2);
// }

// renderApp();
let visibility = false;


const onToggole = () => {
    visibility = !visibility;
    render();
};

const render = () => {
const appRoot = document.getElementById('app');
const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={onToggole}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && <p>Hey! I'm here again</p>}

    </div>
);

ReactDOM.render(template, appRoot);
}

render();