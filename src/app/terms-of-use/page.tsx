import React from "react";
/* eslint-disable react/no-unescaped-entities */
import { Header } from "@components/Header";

export default function MotivationPage() {
  return (
    <>
      <Header />
      <article>
        <div className="container mx-auto py-5">
          <h1 className="text-2xl font-bold mb-2">Terms of use - EstimaHub</h1>

          <h2 className="font-bold mb-2">EstimaHub</h2>
          <p className="mb-4">
            EstimaHub is a platform dedicated to sharing software estimates,
            including detailed descriptions, estimated time, the number of
            developers required, and other relevant information. Our goal is to
            provide a reliable environment for users to obtain accurate and
            valuable estimates in the field of software development.
          </p>

          <h2 className="font-bold mb-2">Privacy and Security</h2>
          <p className="mb-4">
            EstimaHub is committed to not adopting malicious practices, such as
            questionable engagement, intrusive marketing, or invasive ads. We
            ensure the protection of user data, never selling or sharing
            information with third parties. Data collection will be restricted
            to what is strictly necessary for the operation and security of the
            service, following the principle of minimizing the amount of
            sensitive data in our database.
          </p>

          <h2 className="font-bold mb-2">User behavior</h2>
          <p className="mb-2">
            Any user who, through their posts, intentionally shares offensive
            content, employs negative attitudes applied in a general or
            widespread manner, engages in gratuitous sarcasm, or is attacking or
            being aggressive may have their account permanently blocked, along
            with the invalidation of all their posts. The user agrees not to
            manipulate or artificially influence the rating of posts and
            understands that, for a healthy ecosystem, this needs to occur
            spontaneously. Any manipulation, of any nature, may result in the
            permanent banning of the user's account.
          </p>
          <p className="mb-2">
            Similarly, acts of discrimination of any kind are strictly
            prohibited, such as homophobia, transphobia, xenophobia, ableism,
            discrimination based on gender, age, race, color, social class, or
            any other form of segregation through the estimation description.
          </p>
          <p className="mb-4">
            If the user discovers or comes across any security vulnerabilities
            in the service and finds sensitive information (e.g., private data
            of other users, sensitive system data, or unauthorized access), they
            commit to reporting this case privately through the email
            henriques.personal@gmail.com. After the vulnerability is closed,
            Estimahub commits to creating a public postmortem with details of
            what happened. We have no interest in hiding these events and want
            to share all knowledge gained and strategies adopted, keeping in
            mind that we will protect sensitive user data to the fullest extent
            possible. Vulnerabilities that do not involve sensitive information
            and will not harm other users can be freely reported in the
            project's repository.
          </p>

          <h2 className="font-bold mb-2">Guarantees</h2>
          <p className="mb-4">
            EstimaHub is an Open Source project with no explicit guarantees of
            availability or support. There are no digital currencies associated
            with the service.
          </p>

          <h2 className="font-bold mb-2">Changes to Terms of use</h2>
          <p>
            Terms may be altered as needed, with clear and simple notifications
            within the EstimaHub platform. We will always highlight any changes
            made to ensure total transparency.
          </p>
        </div>
      </article>
    </>
  );
}
