import Members from '../components/Members'

const Introduce = () => {
  return (
    <div className="introduce__wrapper">
      <p className="introduce__header">Giới Thiệu</p>
      <p className="introduce__sub--header">
        Thông tin về thành viên và giáo viên hướng dẫn.
      </p>
      <Members />
    </div>
  )
}

export default Introduce
