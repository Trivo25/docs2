import React from "react";

import Button from "@site/src/components/common/Button";
import Link from "@docusaurus/Link";
import ArrowRightSmall from "@site/static/svg/common/arrow_right_small.svg";

import styles from "./Footer.module.scss";
import { SocialLinks } from "@site/src/constants";
import MinaLogo from "@site/static/svg/common/mina_logo.svg";
import DiscordLogo from "@site/static/svg/socials/discord_24x24.svg";
import TwitterLogo from "@site/static/svg/socials/twitter_24x24.svg";
import FacebookLogo from "@site/static/svg/socials/facebook_24x24.svg";
import TelegramLogo from "@site/static/svg/socials/telegram_24x24.svg";
import WeChatLogo from "@site/static/svg/socials/wechat_24x24.svg";
import YoutubeLogo from "@site/static/svg/socials/youtube_24x24.svg";

function Footer(): JSX.Element | null {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // TODO: add email to newsletter
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      return;
    }
    setIsSubmitted(true);
    // console.log(event, email);
  };

  const renderForm = () => {
    if (isSubmitted) {
      return <div>Thanks for subscribing!</div>;
    }
    return (
      <form
        onSubmit={handleSubmit}
        className={styles.minaFooter_form__submitContainer}
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          className={styles.minaFooter_form_input}
        />
        <Button color="orange">
          <span>Submit</span>
          <ArrowRightSmall />
        </Button>
      </form>
    );
  };

  return (
    <footer className={styles.minaFooter}>
      <div className={styles.minaFooter_container}>
        <div className={styles.minaFooter_col1}>
          <a href="https://minaprotocol.com">
            <MinaLogo />
          </a>
          <div className={styles.minaFooter_form}>
            <h4>GET UPDATES</h4>
            <p>Mina is growing fast! Subscribe to stay updated</p>
            {renderForm()}
          </div>
          <div className={styles.minaFooter_social}>
            <h4>CONNECT</h4>
            <p>Join the conversation.</p>
          </div>
          <div className={styles.minaFooter_social__links}>
            <Link href={SocialLinks.Discord}>
              <DiscordLogo />
            </Link>
            <Link href={SocialLinks.Twitter}>
              <TwitterLogo />
            </Link>
            <Link href={SocialLinks.Facebook}>
              <FacebookLogo />
            </Link>
            <Link href={SocialLinks.Telegram}>
              <TelegramLogo />
            </Link>
            <Link href={SocialLinks.WeChat}>
              <WeChatLogo />
            </Link>
            <Link href={SocialLinks.Youtube}>
              <YoutubeLogo />
            </Link>
          </div>
        </div>
        <div className={styles.minaFooter_col2}>
          <ul>
            <li>
              <span>Getting Started</span>
              <ul>
                <li>
                  <Link to="/">Documentation</Link>
                </li>
                <li>
                  <Link to="/zkapps/overview">Write a zkApp</Link>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/node-operators">
                    Run a Node
                  </Link>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/genesis">
                    Join Genesis
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Resources</span>
              <ul>
                <li>
                  <Link href="https://minaprotocol.com/lightweight-blockchain">
                    About the Tech
                  </Link>
                </li>
                <li>
                  <Link
                    rel="knowledge-base"
                    href="https://minaprotocol.com/get-started"
                  >
                    Get Started
                  </Link>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="/assets/technicalWhitepaper.pdf"
                  >
                    Technical Whitepaper
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="/assets/economicsWhitepaper.pdf"
                  >
                    Economics Whitepaper
                  </a>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/media">Media</Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Community</span>
              <ul>
                <li>
                  <Link href="https://minaprotocol.com/community">Welcome</Link>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/genesis">
                    Genesis Program
                  </Link>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/leaderboard">
                    Testnet Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="https://minaprotocol.com/work-with-mina">
                    Careers
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <span>Help and Support</span>
              <ul>
                <li>
                  <Link href={SocialLinks.Discord}>Discord</Link>
                </li>
                <li>
                  <Link href={SocialLinks.Telegram}>Forums</Link>
                </li>
                <li>
                  <Link href={SocialLinks.Github}>Github</Link>
                </li>
                <li>
                  <Link href={SocialLinks.Support}>Contact Us</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={styles.minaFooter_legals}>
        <div className={styles.minaFooter_legals__menu}>
          <ul>
            <li>
              <Link href="https://o1labs.org">O(1) Labs</Link>
            </li>
            <li>
              <Link href="https://github.com/MinaProtocol/mina/blob/develop/CODE_OF_CONDUCT.md">
                Code of Conduct
              </Link>
            </li>
            <li>
              <Link href="https://minaprotocol.com/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="https://minaprotocol.com/tos">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className={styles.minaFooter_legals__info}>
          ©2022 Mina. Started by O(1) Labs.
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
