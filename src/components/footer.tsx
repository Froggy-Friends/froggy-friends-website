import { faDiscord, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Button from "./button";

export default function Footer() {
  return (
    <div className='bg-light-blue text-black w-full p-8'>
      <div className='container mx-auto flex flex-col sm:flex-row justify-between items-center gap-10 p-10'>
        <p className='text-white text-2xl sm:text-3xl'>&copy; Froggy Friends 2023</p>
        <div>
          <Button title='Buy on Magic Eden' url='https://magiceden.io/collections/ethereum/0x7ad05c1b87e93be306a9eadf80ea60d7648f1b6f' />
        </div>
        <div id='links' className='flex flex-row gap-4'>
          <Button title="twitter" icon={faTwitter} url="https://twitter.com/FroggyFriendsCo" />
          <Button title="discord" icon={faDiscord} url="https://discord.gg/BfPr9njdut" />
          <Button title="instagram" icon={faInstagram} url="https://www.instagram.com/froggyfriends.co" />
          <Button title="tiktok" icon={faTiktok} url="https://www.tiktok.com/@froggyfriendsco" />
        </div>
      </div>
    </div>
  )
}