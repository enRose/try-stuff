import { Badge, Avatar, Form, Input, Button, InputNumber, Row, Card, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { StateCtx } from '../../store'
import { Gifs, logGif } from '../../shared/util/logger'
import { CONGRATS } from '../../store/action'
import Confetti from 'react-confetti';
import useTimer from '../../hook/useTimer'

const { Title } = Typography


export const RegisterCard: React.FC = () => {
	const [lamports, setLamports] = useState(0)
	
	const navigate = useNavigate()
	const { sayMyName, dispatch } = useContext(StateCtx)

	const [celebrateTime, setCelebrateDuration] = useState(0)
  const [celebrate, setCelebrate] = useState(false)

	const onFinish = (values: any) => {
		logGif(values, 'RegisterCard', Gifs.LongHairCow)

		setLamports(lamports + 1)

		dispatch({ type: CONGRATS, congrats: 'Yay! You are one lamport richer!' })

		setCelebrate(true)

		setCelebrateDuration(5)
	}

	useTimer(celebrate, celebrateTime, setCelebrateDuration, setCelebrate)

	// This is ported to useTimer hook
	//
	// useEffect(() => {
  //   if (celebrateTime > 0) {
  //     setTimeout(() => {
  //       setInitialTime(celebrateTime - 1)
  //     }, 1000)
  //   }

  //   if (celebrateTime === 0 && celebrate) {
  //     setCelebrate(false)
  //   }
  // }, [celebrateTime, celebrate])

	return (
		<Row justify='center' align='middle'>
			{celebrateTime > 0 && <Confetti numberOfPieces={500} tweenDuration={1000} gravity={0.05} />}

			<Card title="" bordered={false} style={{ width: 500 }}>

				<Title level={2}>
					<Avatar icon={<UserOutlined />} />

					Welcome {sayMyName}

					<Badge
						className="site-badge-count-109"
						count={`lamport: ${lamports}`}
						style={{ backgroundColor: '#52c41a' }}
					/>
				</Title>

				<Form
					layout="vertical"
					name="login-form"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label="Credit card number"
						name="ccNumber"
						rules={[{ required: true, message: 'Please input your credit card number!' }]}
					>
						<Input type='number' placeholder="Credit card number" />
					</Form.Item>

					<Form.Item name='cvc' label="cvc"
						rules={[{
							required: true, min: 0, max: 999,
							message: 'Please input your cvc!'
						}]}>
						<Input type='number' placeholder="cvc" />
					</Form.Item>

					<Form.Item name='expiry' label="expiry"
						rules={[{
							required: true, type: 'number', min: 0, max: 99,
							message: 'Please input your expiry!'
						}]}>
						<InputNumber placeholder="expiry" />
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Submit
						</Button>

					</Form.Item>
				</Form>
			</Card>
		</Row>
	)
}

export default RegisterCard