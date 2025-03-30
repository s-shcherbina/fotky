// import { items } from '../common/moks'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, A11y, EffectCube, Autoplay, EffectFade } from 'swiper'
// import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.css'
import { useState } from 'react'
import { A11y, Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { items } from './common/moks'

function App() {
	const [num, setNum] = useState(-1)
	console.log(num)
	return (
		<div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					color: 'darkorange',
				}}
			>
				<h1>Happy Birthday!!!</h1>
			</div>
			<div style={{ padding: '0 2vw 2vw 2vw' }}>
				<Swiper
					modules={[EffectFade, Pagination, A11y, Autoplay]}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					speed={2000}
					slidesPerView={1}
					pagination={{ clickable: true }}
					loop={true}
					effect={'fade'}
					fadeEffect={{
						crossFade: true,
					}}
					// effect={'cube'}
					// cubeEffect={{
					//   shadow: true,
					//   slideShadows: true,
					//   shadowOffset: 20,
					//   shadowScale: 0.94,
					// }}
				>
					{items.map((item: { image: string }, index: number) => (
						<SwiperSlide
							key={index}
							onClick={() => setNum(index)}
							style={{ cursor: 'pointer' }}
						>
							<div
								style={{
									background: `url(${item.image}) center/cover`,
									height: '85vh',
									width: '96vw',
								}}
							></div>
							{/* <Stack
							direction='column-reverse'
							sx={{
								background: `url(${item.image}) center/cover`,
								height: { xs: '45vh', sm: '60vh', md: '80vh' },
								color: '#FFF',
								textAlign: 'center',
								borderRadius: 2,
							}}
						>
							<Typography sx={{ mb: 5 }} variant='h6'>
								{item.description}
							</Typography>
							<Typography variant='h3'>{item.name}</Typography>
						</Stack> */}
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default App
