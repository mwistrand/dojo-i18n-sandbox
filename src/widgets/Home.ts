import {v, create} from '@dojo/framework/core/vdom';

const Cldr = require('cldrjs');

import * as css from './styles/Home.m.css';

const factory = create();

console.log(new Cldr('en').supplemental.weekData.firstDay()); // 'mon'

export default factory(function Profile() {
    console.log(new Cldr('en').supplemental.weekData.firstDay()); // 'mon'
    return v('h1', {classes: [css.root]}, ['Home Page']);
});
