import {create, v, w} from '@dojo/framework/core/vdom';
import theme from '@dojo/framework/core/middleware/theme';
import Outlet from '@dojo/framework/routing/Outlet';
import dojo from '@dojo/themes/dojo';

const Cldr = require('cldrjs');

import Menu from './widgets/Menu';
import Home from './widgets/Home';
import About from './widgets/About';
import Profile from './widgets/Profile';

import * as css from './App.m.css';

const factory = create({theme});

// undefined since the `setLocaleData.js` template has not been loaded yet
console.log(new Cldr('en').supplemental.weekData.firstDay());
export default factory(function App({middleware: {theme}}) {
    if (!theme.get()) {
        theme.set(dojo);
    }
    console.log(new Cldr('en').supplemental.weekData.firstDay()); // 'mon'
    return v('div', {classes: [css.root]}, [
        w(Menu, {}),
        v('div', [
            w(Outlet, {key: 'home', id: 'home', renderer: () => w(Home, {})}),
            w(Outlet, {key: 'about', id: 'about', renderer: () => w(About, {})}),
            w(Outlet, {key: 'profile', id: 'profile', renderer: () => w(Profile, {username: 'Dojo User'})})
        ])
    ]);
});
