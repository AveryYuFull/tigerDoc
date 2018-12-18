import { generateComponentMap } from '../common/helpers/generateComponentMap';
import DefaultTheme from '../common/templates/DefaultTheme.vue';
import WidgetCom, { comPages as WidgetPages } from './Widget';
import CommonCom, { comPages as CommonPages } from './Common';
import BusinessCom, { comPages as BusinessPages } from './Business';

const pageModules = [
    {
        name: 'na-activity',
        children: [
            {
                name: 'Widget',
                pages: WidgetPages
            },
            {
                name: 'Common',
                pages: CommonPages
            },
            {
                name: 'Business',
                pages: BusinessPages
            }
        ]
    }
];

const componentMap = Object.assign(
    generateComponentMap(WidgetCom, DefaultTheme),
    generateComponentMap(CommonCom, DefaultTheme),
    generateComponentMap(BusinessCom, DefaultTheme)
);
export {
    pageModules,
    componentMap
};
