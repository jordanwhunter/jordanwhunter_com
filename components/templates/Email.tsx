import {EmailTemplateProps} from "@/lib/types";
import {Tailwind} from "@react-email/tailwind";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const EmailTemplate = ({
  name,
  mailer,
  subject,
  message,
}: EmailTemplateProps) => (
  <Html lang="en" dir="ltr">
    <Head>
      <title>{subject}</title>
    </Head>
    <Preview>{name} has contacted you through your website!</Preview>
    <Tailwind>
      <Body className="bg-[#f3f4f6]">
        <Container>
          <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
            <Heading className="leading-tight">
              {`${name} <${mailer}> has sent the following message via your portfolio:`}
            </Heading>
            <Hr />
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;
