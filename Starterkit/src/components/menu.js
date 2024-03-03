const menuItems = [{
    id: 1,
    label: "Main",
    isTitle: true
},
{
    id: 2,
    label: 'Dashboard',
    icon: 'ti-home',
    badge: {
        variant: "primary",
    },
    link: '/'
},
{
    id: 51,
    label: 'Extras',
    isTitle: true
},
{
    id: 52,
    label: 'Authentication',
    icon: 'ti-archive',
    subItems: [{
        id: 53,
        label: 'Login 1',
        link: '/pages/login-1'
    },
    {
        id: 54,
        label: 'Login 2',
        link: '/pages/login-2'
    },
    {
        id: 55,
        label: 'Register 1',
        link: '/pages/register-1'
    },
    {
        id: 56,
        label: 'Register 2',
        link: '/pages/register-2'
    },
    {
        id: 57,
        label: 'Recover Password 1',
        link: '/pages/recoverpwd-1'
    },
    {
        id: 58,
        label: 'Recover Password 2',
        link: '/pages/recoverpwd-2'
    },
    {
        id: 59,
        label: 'Lock Screen 1',
        link: '/pages/lock-screen1'
    },
    {
        id: 60,
        label: 'Lock Screen 2',
        link: '/pages/lock-screen2'
    }
    ]
},
{
    id: 61,
    label: 'Extra Pages',
    icon: 'ti-support',
    subItems: [
        {
            id: 65,
            label: 'Blank Page',
            link: '/pages/blank-page'
        },
        {
            id: 65,
            label: 'Game Demo',
            link: '/pages/game-demo'
        },
        {
            id: 66,
            label: 'Error 404',
            link: '/pages/404'
        },
        {
            id: 67,
            label: 'Error 500',
            link: '/pages/500'
        },
        {
            id: 69,
            label: 'Maintenance',
            link: '/pages/maintenance'
        },
    ]
},
{
    id: 75,
    label: "Multi Level",
    icon: "ti-more",
    subItems: [{
        id: 76,
        label: "Level 1.1",
        link: "#",
        parentId: 75
    },
    {
        id: 77,
        label: "Level 1.2",
        parentId: 75,
        subItems: [{
            id: 78,
            label: "Level 2.1",
            link: "#",
            parentId: 75
        },
        {
            id: 79,
            label: "Level 2.2",
            link: "#",
            parentId: 75
        }
        ]
    }
    ]
}
]

export {
    menuItems
};