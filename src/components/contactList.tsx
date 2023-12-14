
import ContactListItem from './contactListItem';


const ContactList = () => {

    return (
        <ul className="flex flex-col gap-8 lg:w-[48%]" >
            <ContactListItem icon="whatsapp"
                bgColor="bg-social-phone"
                title='Meu telefone'
                description='Estou sempre disposto a atender ligações'
                button='Ligue agora mesmo' />
            <ContactListItem icon="email"
                bgColor="bg-secondary-100"
                title='Meu email'
                description='Me envie um email para nos conhecermos melhor ou um simples feedback'
                button='' />
            <ContactListItem icon="linkedin"
                bgColor="bg-social-linkdn"
                title='Meu LinkedIn'
                description='Conheça um pouco da minha carreira e meus trabalhos já publicados'
                button='' />
        </ul>
    )
}


export default ContactList