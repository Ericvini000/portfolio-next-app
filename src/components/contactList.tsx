import ContactListItem from './contactListItem';


const ContactList = () => {

    return (
        <ul className="flex flex-col gap-16 lg:w-[48%]" >
            <ContactListItem icon="Numero" info='69981596969'
                bgColor="bg-social-phone"
                title='Meu telefone'
                description='Estou sempre disposto a atender ligações'
                button='Ligue agora mesmo' />
            <ContactListItem icon="Email" info='ericviniciusfelixsilva@mail.com'
                bgColor="bg-secondary-100"
                title='Meu email'
                description='Me envie um email para nos conhecermos melhor ou um simples feedback'
                button='Mande um email' />
        </ul>
    )
}


export default ContactList