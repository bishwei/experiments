# MatchAsync
Components that allow components to be asynchronously loaded when a route is matched.

## `<MatchAsync componentProps getComponent>`
A component that returns a `react-router` [Match](https://react-router.now.sh/Match) component that will render an `AsyncComponent`.  The main use case here is to support code-splitting via `System.import`.

### Props
- `componentProps` *(Object)* - Any props that should be passed down to the component returned by `getComponent`
- `getComponent` *(Object)* - A function that returns a `Promise` which will resolve with the `Component` that should be mounted by this route.

### Usage
```javascript
import MatchAsync from 'components/MatchAsync';

const HeaderSearch = () =>
    <div>
        <MatchAsync exactly pattern='/' getComponent={ () => System.import('components/Search').then(module => module.QuickSearch) } />
        <MatchAsync pattern='/profile/:userID?' getComponent={ () => System.import('components/Search').then(module => module.CollabSearch) } />
    </div>;
```
