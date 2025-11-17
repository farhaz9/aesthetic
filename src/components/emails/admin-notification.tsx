import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface AdminNotificationEmailProps {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

export const AdminNotificationEmail = ({
  name,
  email,
  phone,
  service,
  message,
}: AdminNotificationEmailProps) => (
  <Html>
    <Head />
    <Preview>New Consultation Request from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>New Consultation Request</Heading>
        <Section style={section}>
          <Text style={label}>From:</Text>
          <Text style={value}>{name}</Text>
        </Section>
        <Section style={section}>
          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>
        </Section>
        <Section style={section}>
          <Text style={label}>Phone:</Text>
          <Text style={value}>{phone}</Text>
        </Section>
        {service && (
          <Section style={section}>
            <Text style={label}>Service of Interest:</Text>
            <Text style={value}>{service}</Text>
          </Section>
        )}
        {message && (
          <Section style={section}>
            <Text style={label}>Message/Address:</Text>
            <Text style={value}>{message}</Text>
          </Section>
        )}
      </Container>
    </Body>
  </Html>
);

export default AdminNotificationEmail;

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
  color: '#2c3e50',
  padding: '0 20px',
  borderBottom: '1px solid #eaeaea',
  paddingBottom: '20px',
};

const section = {
  padding: '0 20px',
  marginTop: '20px',
};

const label = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#34495e',
  margin: '0 0 4px 0',
};

const value = {
  fontSize: '16px',
  color: '#2c3e50',
  lineHeight: '1.5',
  margin: '0',
  padding: '10px',
  backgroundColor: '#f6f9fc',
  borderRadius: '4px',
  whiteSpace: 'pre-wrap' as const,
};
