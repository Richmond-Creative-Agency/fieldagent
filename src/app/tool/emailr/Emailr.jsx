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

  let emailBody = `Dear City Council Members and Liaisons \n
I am a constituent of the [!!DISTRICT!!] district under Council Member [!!CITY_MEMBER!!] and I am writing to demand that you adopt a robust resolution for a ceasefire in Gaza.  Etc etc`;

  const selectValues = {
    'All of Them!': 'All',
    'Councilor Andreas Addison': 'andreas.addison@rva.gov',
    'Whitney Brown': 'whitney.brown@rva.gov',
    'Councilor Katherine Jordan': 'katherine.jordan@rva.gov',
    'Sven Philipsen': 'sven.philipsen@rva.gov',
    'Councilor Ann-Frances Lambert': 'ann-frances.lambert@rva.gov',
    'Kiya Stokes': 'kiya.stokes@rva.gov',
    'Councilor Kristen Nye': 'kristen.larson@rva.gov',
    'Tim Siverd': 'timmy.siverd@rva.gov',
    'Councilor Stephanie Lynch': 'stephanie.lynch@rva.gov',
    'Amy Robins': 'amy.robins@rva.gov',
    'Councilor Ellen Robertson': 'ellen.robertson@rva.gov',
    'Tavares Floyd': 'tavares.floyd@rva.gov',
    'Councilor Cynthia Newbille': 'cynthia.newbille@rva.gov',
    'Sam Patterson': 'sam.patterson@rva.gov',
    'Councilor Reva Trammell': 'reva.trammell@rva.gov',
    'Richard Bishop': 'richard.bishop@rva.gov',
    'Councilor Nicole Jones': 'nicole.jones@rva.gov',
    'Dominique Mckenzie': 'dominique.mckenzie2@rva.gov',
  };
  const districts = [
    'At Large',
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
          <DistrictSelect handleChange={selectDistrict} districts={districts} />
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
