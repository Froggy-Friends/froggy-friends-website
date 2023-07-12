import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "./button";

export default function Footer() {
    return (
        <div className='text-black w-full p-8'>
            <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center gap-10 p-10'>
                <p className='text-2xl sm:text-3xl'>&copy; Froggy Friends 2023</p>
                <div id='links' className='flex flex-row gap-4'>
                    <Button title="twitter" icon={faTwitter} url="https://twitter.com/FroggyFriendNFT"/>
                    <Button title="discord" icon={faDiscord} url="https://discord.gg/froggyfriends"/>
                    <Button title="instagram" icon={faInstagram} url="https://www.instagram.com/froggyfriendsglobal"/>
                    <Button title="tiktok" icon={faTiktok} url="https://www.tiktok.com/@froggyfriendsglobal"/>
                </div>
            </div>
        </div>
    )
}