import { Form, Input, Button, InputNumber, Row, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


export const RegisterCard = () => {
	const navigate = useNavigate()

	const onFinish = (values: any) => {
		console.log('Received values of form: ', values)
	}

	return (
		<Row justify='center' align='middle'>
			<Card title="" bordered={false} style={{ width: 500 }}>

				<Form
					layout="vertical"
					name="login-form"
					className="login-form"
					initialValues={{ remember: true }}
					onFinish={onFinish}
				>
					<Form.Item
						label="Credit card number"
						name="username"
						rules={[{ required: true, message: 'Please input your credit card number!' }]}
					>
						<Input placeholder="Credit card number" />
					</Form.Item>

					<Form.Item name={['user', 'cvc']} label="cvc" 
						rules={[{ required: true, type: 'number', min: 0, max: 999, 
						message: 'Please input your cvc!' }]}>
						<InputNumber placeholder="cvc"/>
					</Form.Item>

					<Form.Item name={['user', 'expiry']} label="expiry" 
						rules={[{ required: true, type: 'number', min: 0, max: 99,
						message: 'Please input your expiry!' }]}>
						<InputNumber placeholder="expiry"/>
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