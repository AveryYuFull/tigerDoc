import { generateComponentMap } from '../common/helpers/generateComponentMap';
import DefaultTheme from '../common/templates/DefaultTheme.vue';
import WidgetCom, { comPages as WidgetPages } from './Widget';
import CommonCom, { comPages as CommonPages } from './Common';
import BusinessCom, { comPages as BusinessPages } from './Business';
console.log('aaaaaa-->', process.env);
// const pageModules = process.env.pageModules;
const pageModules = [{
    name: 'na-activity',
    pages: '',
    children: [
        {
            name: 'Widget',
            pages: WidgetPages,
            children: [{
                name: 'Common111',
                pages: CommonPages
            }]
        },
        {
            name: 'Common',
            pages: CommonPages,
            children: []
        },
        {
            name: 'Business',
            pages: BusinessPages,
            children: []
        }
    ]
}, {
    name: 'na-activity1',
    pages: '',
    children: [
        {
            name: 'Widget1',
            pages: WidgetPages,
            children: [{
                name: 'Common1',
                pages: CommonPages
            }]
        },
        {
            name: 'Common1',
            pages: CommonPages,
            children: []
        },
        {
            name: 'Business1',
            pages: BusinessPages,
            children: []
        }
    ]
}];

const componentMap = Object.assign(
    generateComponentMap(WidgetCom, DefaultTheme),
    generateComponentMap(CommonCom, DefaultTheme),
    generateComponentMap(BusinessCom, DefaultTheme)
);
export {
    pageModules,
    componentMap
};
