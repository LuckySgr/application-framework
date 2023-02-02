let menuList: {
    id: number,
    menuIcon: string,
    menuName: string,
    children: {
        id: number,
        menuIcon: string,
        menuName: string,
        menuRoute: string
    }[]
}[] = [
    {
        id: 1,
        menuIcon: 'location',
        menuName: '测试1',
        children: [
            {
                id: 11,
                menuIcon: 'location',
                menuName: 'string',
                menuRoute: 'test'
            }
        ]
    },
    {
        id: 2,
        menuIcon: 'location',
        menuName: '测试2',
        children: []
    }
]

export {menuList}