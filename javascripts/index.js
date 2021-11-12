let main = ()=>{
    let listNavBar   = Array.from(document.getElementById('list').children)
    let mapSections = new Map()

    let mainSection = document.getElementById('main')
    Array.from(mainSection.children).forEach(item=>{
        let name = item.id.replace('section-', '')
        mapSections.set(name, item)
    })

    listNavBar.forEach((item, index)=>{
        item.addEventListener("click",(ev)=>{
            let navItemClassName = 'navbar-item-selected'
            let sectionItemClassName = 'section-item-selected'
            listNavBar.forEach((nItem, i)=> {
                let includeClassSelectedName = nItem.className.includes(navItemClassName)
                if(nItem === item && includeClassSelectedName) return
                let name = nItem.id.replace('navbar-item-', '')
                let sectionItem = mapSections.get(name)
                if(nItem === item && !includeClassSelectedName){
                    nItem.className =  nItem.className.concat(' ').concat(navItemClassName)
                    sectionItem.className = sectionItem.className.concat(' ').concat(sectionItemClassName)

                    let selectedStyle = window.getComputedStyle(sectionItem)
                    mainSection.style.height = parseInt(selectedStyle.lineHeight) + 'px';
                }else if(includeClassSelectedName){
                    nItem.className = nItem.className.replace(navItemClassName, '')
                    sectionItem.className = sectionItem.className.replace(sectionItemClassName, '')
                }
            })
        })
    })
}

main()
