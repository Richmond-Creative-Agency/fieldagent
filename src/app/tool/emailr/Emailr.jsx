'use client';
import H2 from '@/app/ui/typography/H2';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { buttonClasses, inputClasses } from '@/app/ui/classes';
import EmailBody from './EmailBody';
import CityMemberSelect from './CityMemberSelect';
import DistrictSelect from './DistrictSelect';
import EmailSubject from './EmailSubject';
export default function Emailr() {
  const urlParams = useSearchParams();
  const campaign = urlParams.get('campaign');
  //   console.log(campaign.toString());

  let emailBody = `Dear [______], \n
My name is [______] and I am a constituent of the [______] district and I am writing to you today to demand that you adopt the Richmond Consensus Resolution that calls for an immediate and permanent ceasefire in Gaza. I am deeply troubled by Israel's genocide of the Palestinian people and my country's unwavering support for this. US tax dollars and weapons are being used to indiscriminately kill Palestinians. Our Senators and Congressperson have continued to support this through their votes in favor of sending continued financial support and weapons to Israel. I am asking you to use your position to intervene by passing this resolution and urging our reps in Virginia to stop supporting Israel. I will not vote for any politician in November who does not condemn Israel's actions and who does not explicitly vote or engage in litigation to end the transfer of weapons and money to Israel. \n
Thank you, \n
[______];`;

  const selectValues = {
    'All of Them!': 'All',
    'Andreas Addison 1st District':
      'andreas.addison@rva.gov, whitney.brown@rva.gov',
    'Katherine Jordan 2nd District':
      'katherine.jordan@rva.gov, sven.philipsen@rva.gov',
    'Ann-Frances Lambert 3rd District':
      'ann-frances.lambert@rva.gov, kiya.stokes@rva.gov',
    'Kristen Nye 4th District': 'kristen.larson@rva.gov, timmy.siverd@rva.gov',
    'Stephanie Lynch 5th District':
      'stephanie.lynch@rva.gov, amy.robins@rva.gov',
    'Ellen Robertson 6th District':
      'ellen.robertson@rva.gov, gayle.harris@rva.gov',
    'Cynthia Newbille 7th District':
      'cynthia.newbille@rva.gov, sam.patterson@rva.gov',
    'Reva Trammell 8th District':
      'reva.trammell@rva.gov, richard.bishop@rva.gov',
    'Nicole Jones 9th District':
      'nicole.jones@rva.gov, dominique.mckenzie2@rva.gov',
  };
  const districts = [
    'All',
    'Andreas Addison',
    'Katherine Jordan',
    'Ann-Frances Lambert',
    'Kristen Nye',
    'Stephanie Lynch',
    'Ellen Robertson',
    'Cynthia Newbille',
    'Reva Trammell',
    'Nicole Jones',
  ];
  function getInitialItems() {
    let outputValues = Object.values(selectValues);
    outputValues = outputValues.slice(1);
    outputValues = outputValues.join(',');
    return outputValues;
  }

  function selectRecipient(recipient) {
    // console.log(recipient);
    let outputValues;

    if (recipient != 'All') {
      setEmailObject({ ...emailObject, emailAddress: recipient });
      return;
    }
    outputValues = Object.values(selectValues);
    outputValues = outputValues.slice(1);
    outputValues = outputValues.join(',');
    // console.log(outputValues);
    setEmailObject({ ...emailObject, emailAddress: outputValues });
  }

  function selectDistrict(district) {
    if (!district) return;

    setEmailObject({ ...emailObject, district: district });
  }

  function handleEmailBodyChange(item) {
    setEmailObject({ ...emailObject, emailBody: item });
  }

  function handleSubjectChange(item) {
    // console.log(item);
    setEmailObject({ ...emailObject, subject: item });
  }
  function handleReset() {}

  function replaceDistrict(item, token) {
    let outputDistrict = emailObject.district;
    const enOrdinalRules = new Intl.PluralRules('en-US', { type: 'ordinal' });

    const suffixes = new Map([
      ['one', 'st'],
      ['two', 'nd'],
      ['few', 'rd'],
      ['other', 'th'],
    ]);
    const formatOrdinals = (n) => {
      const rule = enOrdinalRules.select(n);
      const suffix = suffixes.get(rule);
      return `${n}${suffix}`;
    };

    item = item.replace(token, formatOrdinals(emailObject.district));
    return item;
  }
  function replaceName(item, token) {
    item = item.replace(token, districts[emailObject.district]);
    console.log(item);
    return item;
  }

  function generateEmail(emailObject) {
    let supportedTokens = ['[!!DISTRICT!!]', '[!!CITY_MEMBER!!]'];
    let newEmailBody = emailObject.emailBody;
    if (emailObject.district === '0') {
      newEmailBody = newEmailBody.replace(
        'of the [!!DISTRICT!!] district under Council Member [!!CITY_MEMBER!!]',
        'At Large',
      );
    }
    if (emailObject.district != '0') {
      supportedTokens.forEach((token, index) => {
        if (token === '[!!DISTRICT!!]') {
          newEmailBody = replaceDistrict(newEmailBody, token);
        }
        if (token === '[!!CITY_MEMBER!!]') {
          newEmailBody = replaceName(newEmailBody, token);
        }
      });
    }

    let output = encodeURI(
      `mailto:${emailObject.emailAddress}?subject=${emailObject.subject}&body=${newEmailBody}`,
    );
    return output;
  }
  const initialEmail = {
    emailAddress: getInitialItems(),
    subject: 'Ceasefire Resolution',
    emailBody: emailBody,
    district: '0',
  };
  const [emailObject, setEmailObject] = useState(initialEmail);
  return (
    <>
      <H2>Who do you want to email?</H2>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <CityMemberSelect
            handleChange={selectRecipient}
            selectValues={selectValues}
          />
          {/* <DistrictSelect handleChange={selectDistrict} districts={districts} /> */}
        </div>
        <EmailSubject
          handleChange={handleSubjectChange}
          subject={emailObject.subject}
        />
        <EmailBody
          emailBody={emailObject.emailBody}
          handleChange={handleEmailBodyChange}
        />
        <div className="my-4 flex gap-4">
          <button
            className={`${buttonClasses} bg-gray hover:bg-gray/50 hover:text-white text-black inline-block`}
            onClick={handleReset}
          >
            Reset
          </button>
          <a
            className={`${buttonClasses} inline-block`}
            href={generateEmail(emailObject)}
          >
            Generate an email to Richmond City Hall
          </a>
        </div>
      </div>
    </>
  );
}
