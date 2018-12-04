// import { storiesOf } from '@storybook/vue';

// export default function generatePages(pageModule, comMap, pagePath, storiesModule, pageMap) {
//     let tempPageMap = pageMap || {};
//     (pageModule || []).forEach((pagemod) => {
//         const tempPagePath = (pagePath || []).slice();
//         let tempStoriesModule = storiesModule || null;
//         if (pagemod.name) {
//             tempPagePath.push(pagemod.name);
//         }
//         if (pagemod.children && pagemod.children.length > 0) {
//             tempPageMap = generatePages(
//                 pagemod.children,
//                 comMap,
//                 tempPagePath,
//                 tempStoriesModule,
//                 tempPageMap,
//             );
//         }
//         if (pagemod.pages && pagemod.pages.length > 0) {
//             tempStoriesModule = tempStoriesModule || storiesOf(tempPagePath.join('|'), module);
//             pagemod.pages.forEach((pageItem) => {
//                 const com = comMap[pageItem];
//                 // const tempComponent = com && com.component;
//                 const tempComponent = com;
//                 if (tempComponent) {
//                     tempPageMap[tempPagePath.join('|')] = tempPageMap[tempPagePath.join('|')] || [];
//                     tempPageMap[tempPagePath.join('|')].push(tempComponent);
//                     tempStoriesModule = tempStoriesModule.add(tempComponent.name || pageItem,
//                         () => ({
//                             render: h => h(tempComponent, {
//                                 props: {},
//                             }),
//                         }));
//                 }
//             });
//         }
//     });
//     return tempPageMap;
// }
