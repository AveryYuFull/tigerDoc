import { TABLE_TITLES, TABLE_CONTENT_ATTR_MAP, getAlias } from '../constant';
import generateTableMap from '../../common/helpers/generateTableMap';
// import { MODULEDATA, MODULEDATAPROP } from './common/commonData';

const vehicleBar = `vehicleBar: {
                    AdapterBackColor: "#DF3348"
                    AdapterLabel: "AllFit"
                    DividingLineColor: "#DF3348"
                    FontColor: "#FFFFFF"
                    IsDividingLine: true
                    NoSpecificationTone: "请选择规格"
                    NoVehiclePrompt: "+添加我的爱车"
                }`;
const carInfo = `carInfo: {
                    Brand: "D - 大众"
                    BrandType: "上海大众"
                    CarID: "{3b4ff4d3-d849-47ba-9e77-1c1f59a67283}"
                    CarName: "POLO劲情"
                    CarNumber: ""
                    Classno: ""
                    ImageUrl: "https://img1.tuhu.org/Images/Logo/dazhong.png"
                    IsDefaultCar: true
                    LIYANGID: ""
                    Nian: "2010"
                    OnRoadMonth: ""
                    Pailiang: "1.6L"
                    ProductID: "VE-VOLS07AK"
                    PropertyList: Array(0)
                    Registrationtime: ""
                    SalesName: "2009款 1.6L 手自一体 风尚版"
                    Status: -1
                    TID: "3047"
                    TireSize: "195/55R15;185/60R14;205/45R16"
                    TireSizeForSingle: ""
                    TotalMileage: 0
                    Vehicle: "POLO劲情-上海大众"
                    currentType: 5
                    lunguType: ""
                    _force: false
                    _isChange: false
                    _isUpdataCar: true
                }`;

const tpls = `<${getAlias(1)}-vehicle-bar
    :vehicleBar="vehicleBar"
    :carInfo="carInfo">
</${getAlias(1)}-vehicle-bar>`;


const script = `<script>
    import ${getAlias()}VehicleBar from 'vehicleBar/VehicleBar';
    export default {
        components: {
            ${getAlias()}VehicleBar
        },
        data() {
            return {
                ${vehicleBar},
                ${carInfo}
            }
        }
    };
</script>`;

export default {
    name: 'VehicleBar组件',
    desc: '<p>顶部适配栏模块</p>',
    contents: [
        // {
        //     name: 'Dependencies',
        //     contents: []
        // },
        {
            name: 'Example',
            contents: [{
                type: 'desc',
                contents: 'template:'
            }, {
                type: 'pre',
                contents: tpls
            }, {
                type: 'desc',
                contents: 'script:'
            }, {
                type: 'pre',
                contents: script
            }]
        },
        {
            type: 'table',
            name: 'Props',
            titles: TABLE_TITLES.PROPS,
            contents: generateTableMap(
                [
                    ['vehicleBar', 'Y', '顶部适配栏信息', 'Object', '-', '-'],
                    ['carInfo', 'Y', '车型信息', 'Object', '-', '-']
                ],
                TABLE_CONTENT_ATTR_MAP.PROPS,
            )
        },
        // {
        //     type: 'table',
        //     name: 'Events',
        //     titles: TABLE_TITLES.EVENTS,
        //     contents: generateTableMap(
        //         [
        //             [
        //                 'click',
        //                 '点击事件',
        //                 '$event'
        //             ]
        //         ],
        //         TABLE_CONTENT_ATTR_MAP.EVENTS,
        //     )
        // },
        // {
        //     type: 'table',
        //     name: 'Methods',
        //     titles: TABLE_TITLES.METHOD,
        //     contents: []
        // },
        {
            type: 'table',
            name: 'Projects',
            titles: TABLE_TITLES.PROJECTS,
            contents: generateTableMap(
                [
                    [
                        'NaActivity',
                        '活动页',
                        {
                            type: 'url',
                            // link: '#',
                            contents: 'https://wxdev.tuhu.work/vue/vueTest/pages/home/index?_project=NaActivity&id=A58F8C8A'
                        }
                    ]
                ],
                TABLE_CONTENT_ATTR_MAP.PROJECTS,
            )
        },
        {
            name: 'Backers',
            contents: [{
                type: 'desc',
                contents: 'pengyuying'
            }]
        }
    ]
};
