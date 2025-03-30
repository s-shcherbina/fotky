import { Swiper, SwiperSlide } from 'swiper/react'
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
			<div
				style={
					{
						// margin: '0 auto',
						// paddingLeft: '2vw',
						// border: 'solid',
						// display: 'flex',
						// justifyContent: 'center',
						// 	alignItems: 'center',
					}
				}
			>
				<Swiper
					modules={[EffectFade, Pagination, A11y, Autoplay]}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					speed={2000}
					slidesPerView={1}
					// slidesPerView={'auto'}
					pagination={{ clickable: true }}
					loop={true}
					effect={'fade'}
					fadeEffect={{
						crossFade: true,
					}}
				>
					{items.map((item: { image: string }, index: number) => (
						<SwiperSlide
							key={index}
							onClick={() => setNum(index)}
							style={{ cursor: 'pointer' }}
						>
							<div
								style={{
									backgroundImage: `url(${item.image})`,
									backgroundPosition: 'top center',
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'auto !important',
									height: '100vh',
									width: 'auto !important',
									// height: 'auto !impotant',
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
