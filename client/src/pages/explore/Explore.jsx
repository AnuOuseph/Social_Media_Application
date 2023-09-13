import "./explore.scss"
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';


function Explore() {
    const items = [
        {
            id:1,
            likes:123,
            img:"https://plus.unsplash.com/premium_photo-1665311513442-1ea2486bba0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
        },
        {
            id:2,
            likes:635,
            img:"https://images.unsplash.com/photo-1487802727281-025fd5a3e963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
        },
        {
            id:3,
            likes:765,
            img:"https://images.unsplash.com/photo-1564458037016-4eb764c5f473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id:4,
            likes:234,
            img:"https://images.unsplash.com/photo-1496436818536-e239445d3327?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
        ,{
            id:5,
            likes:621,
            img:"https://images.unsplash.com/photo-1452698325353-b90e60289e87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        }
        ,{
            id:6,
            likes:1098,
            img:"https://images.unsplash.com/photo-1682685797795-5640f369a70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        },
        {
            id:7,
            likes:298,
            img:"https://images.unsplash.com/photo-1687360440922-b8e41c84ea99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
        },
        {
            id:8,
            likes:119,
            img:"https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id:9,
            likes:723,
            img:"https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80"
        },
        {
            id:10,
            likes:412,
            img:"https://images.unsplash.com/photo-1691944435737-ccde042d3fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            id:11,
            likes:980,
            img:"https://images.unsplash.com/photo-1672501378238-2059787322cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        },
        {
            id:12,
            likes:189,
            img:"https://plus.unsplash.com/premium_photo-1686593546987-6c190f16927c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]
  return (
    <div className="explore">
      {items.map((item)=>(
        <>
        <div className="item" key={item.id}>
        <img src={item.img} alt="" />
        <div className="layer">
            <p><FavoriteOutlinedIcon/> {item.likes}</p>
        </div>
        </div>
        </>
      ))}
    </div>
  )
}

export default Explore
