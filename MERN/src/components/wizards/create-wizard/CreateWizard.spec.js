import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import CreateWizard from "./CreateWizard"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

describe('CreateWizard', () => {
    it('should render the submit button as enabled when a name and an age is entered', async () => {
        render(<CreateWizard />)
        screen.debug()
        
        // await screen.findByText(/create wizard/i)
        // expect(await screen.findByRole("button", { name: /submit/i })).toBeDisabled()
        // userEvent.type(screen.getByPlaceholderText(/name/i), 'Alfonso')
        // userEvent.type(screen.getByPlaceholderText(/age/i), 33)
        expect(await screen.findByRole("button", { name: /submit/i })).toBeEnabled()
    })
})