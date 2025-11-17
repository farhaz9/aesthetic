import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Link,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface ThankYouEmailProps {
  name: string;
}

export const ThankYouEmail = ({ name }: ThankYouEmailProps) => (
  <Html>
    <Head />
    <Preview>Thank You For Your Request - ElysiarCrown</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>Thank You, {name}!</Heading>
        <Text style={paragraph}>
          We have successfully received your request for an at-home consultation. Our team is reviewing your information and will contact you shortly to schedule a convenient time for your visit.
        </Text>
        <Text style={paragraph}>
          At ElysiarCrown, we are committed to providing you with the highest standard of care and privacy.
        </Text>
        <Section style={buttonContainer}>
          <Link href="https://elysiarcrown.com" style={button}>
            Visit Our Website
          </Link>
        </Section>
        <Text style={footer}>
          ElysiarCrown | At-Home Hair Restoration in Delhi
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  maxWidth: '600px',
};

const heading = {
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#c29957', // Gold color
  padding: '0 20px',
};

const paragraph = {
  fontSize: '16px',
  color: '#333',
  lineHeight: '1.6',
  padding: '0 20px',
  textAlign: 'center' as const,
};

const buttonContainer = {
  textAlign: 'center' as const,
  marginTop: '30px',
};

const button = {
  backgroundColor: '#c29957',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 20px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  textAlign: 'center' as const,
  marginTop: '30px',
  borderTop: '1px solid #eaeaea',
  paddingTop: '20px',
};
