import Navigation from '@/components/navigation'
import CalculatorForm from './components/CalculatorForm'

export const metadata = {
    title: 'My Calculator',
}

const Page = () => {
    return (
        <>
            <Navigation />
            <CalculatorForm />
        </>
    )
}

export default Page
