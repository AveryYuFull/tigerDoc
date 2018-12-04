// 各类型表头
export const TABLE_TITLES = {
    // 参数
    PROPS: [
        {
            name: '参数',
            width: '15%',
            key: 'name'
        },
        {
            name: '说明',
            // width: '25%',
            key: 'description'
        },
        {
            name: '类型',
            // width: '15%',
            key: 'type'
        },
        {
            name: '可选值',
            // width: '15%',
            key: 'option'
        },
        {
            name: '默认值',
            key: 'default'
        }
    ],
    // 事件
    EVENTS: [
        {
            name: '事件名称',
            width: '15%',
            key: 'name'
        },
        {
            name: '说明',
            // width: '25%',
            key: 'description'
        },
        {
            name: '参数',
            // width: '15%',
            key: 'param'
        }
    ],
    // 实例方法
    METHOD: [
        {
            name: '方法名',
            width: '15%',
            key: 'name'
        },
        {
            name: '说明',
            // width: '25%',
            key: 'description'
        },
        {
            name: '参数',
            // width: '15%',
            key: 'param'
        }
    ],
    PROJECTS: [
        {
            name: '工程名称',
            width: '15%',
            key: 'name'
        },
        {
            name: '说明',
            // width: '25%',
            key: 'description'
        },
        {
            name: '链接地址',
            // width: '15%',
            key: 'url'
        }
    ]
};

export const TABLE_CONTENT_ATTR_MAP = {
    // 属性的表格
    PROPS: {
        0: 'name',
        1: 'description',
        2: 'type',
        3: 'option',
        4: 'default'
    },
    // 事件的表格
    EVENTS: {
        0: 'name',
        1: 'description',
        2: 'param'
    },
    // 实例方法的表格
    METHOD: {
        0: 'name',
        1: 'description',
        2: 'param'
    },
    PROJECTS: {
        0: 'name',
        1: 'description',
        2: 'url'
    }
};
