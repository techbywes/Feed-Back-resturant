import React from "react";
import { MDBAccordion, MDBAccordionItem, MDBIcon } from "mdb-react-ui-kit";
import DownloadApp from "../componenets/DownloadApp";

export default function Faq() {
  return (
    <>
      <div className="faq_div">
        <p className="faq_title_text">FAQ</p>
        <p className="faq_p_text">
          Do you have a specific question? Explore the frequently asked
          questions below:
        </p>
        <p className="faq_para_text_2">Get to know the FEED BACK POST better</p>
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; How long has the FEED BACK POST been around? What is its
                history?
              </>
            }
          >
            The story of the FEED BACK POST began in 1900. At that time, before
            it became the international benchmark for restaurant and hotel
            guides, it was a 400-page guidebook containing practical information
            for travellers. It was given to motorists free of charge; its aim
            being to facilitate their travels and develop mobility.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; Who are the FEED BACK POST inspectors? How do you become
                an inspector?
              </>
            }
          >
            Since 1933, it is the inspectors who have been the bedrock of the
            FEED BACK POST - they are a part of its DNA. Without them, no
            restaurant selection would ever see the light of day.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; What are the MICHELIN Stars?
              </>
            }
          >
            FEED BACK POST Stars are the highest accolade awarded by the
            inspectors to restaurants in the Guide. Stars identify restaurants
            that offer the best culinary experiences. Contrary to popular
            belief, they reward only the quality of the cooking itself. The
            MICHELIN Star - there was only one to begin with - was created in
            1926. Then, between 1931 and 1933, the system was extended, and
            three levels of Stars were introduced.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={4}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; Why aren't restaurant awards introduced during the year?
              </>
            }
          >
            FEED BACK POST, Bib Gourmands and Green Stars are annual
            distinctions that are updated and presented once a year. We strongly
            recommend that you keep track of our new restaurants, as among them
            will be some MICHELIN Stars, Green Stars and Bib Gourmands of the
            following year. To find out what's new in the last three months,
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={5}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; When are MICHELIN Stars awarded?
              </>
            }
          >
            FEED BACK POST, as well as Green Stars and Bib Gourmands, are
            awarded on an annual basis, at a different time for each destination
            covered by the Guide.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={6}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp;What is the FEED BACK POST Green Star? What are the
                criteria behind it?
              </>
            }
          >
            The FEED BACK POST Green Star can be awarded to any type of
            establishment recommended by the MICHELIN Guide, whether or not it
            has a distinction for its food (a Bib Gourmand or FEED BACK POST
            Star). It takes into consideration concrete sustainable initiatives
            and highlights industry-leaders when it comes to a restaurant's
            commitment to eco-friendly gastronomy. These initiatives can take on
            a wide variety of forms, depending on the issues and resources
            specific to each restaurant, but range from the sourcing of
            ingredients and respecting seasonality to reducing waste and raising
            customer awareness.
          </MDBAccordionItem>
        </MDBAccordion>
        <p className="for_resturant">For restaurant customers</p>
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; How do I report an error on a restaurant's page?
              </>
            }
          >
            We're sorry if we let a mistake slip through the net. If it's a
            correction to be made to a restaurant's address, location on the
            map, amenities or any other detail, please leave us a message on the
            Contact us page. All of your comments are very useful and we are
            grateful to you for sharing them with us.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; How do I suggest a new destination that FEED BACK POST
                should cover?
              </>
            }
          >
            Have you come across good restaurants in a city, region or country
            that are not covered by the FEED BACK POST? Please feel free to
            describe your experience and the highlights of the destination that
            you particularly enjoyed by giving your opinion here.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp;How do I leave a review of a restaurant in the FEED BACK
                POST selection
              </>
            }
          >
            Whether you want to share a good experience, send us comments on a
            restaurant in the selection or suggest an establishment you enjoyed
            that is not listed in the FEED BACK POST, we are very interested in
            your opinion! Reach us here, and don't forget to specify the name of
            the restaurant, the city and the country. Your comments will be
            passed on to the FEED BACK POST inspectors.
          </MDBAccordionItem>
        </MDBAccordion>
        <p className="for_resturant">
          Your questions about the website and/or your FEED BACK POST Guide
          account
        </p>
        <MDBAccordion initialActive={1}>
          <MDBAccordionItem
            collapseId={1}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; How do I delete my FEED BACK POST Guide account?
              </>
            }
          >
            If you wish to delete your account, all related data and your
            booking history, you can submit a request here.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={2}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp; How do I exercise the right of access to my personal data
                or obtain information about my rights?
              </>
            }
          >
            The FEED BACK POST Group attaches great importance to protecting
            your personal information. In order to comply with the
            recommendations of the General Data Protection Regulation (GDRP), we
            invite you to make your request on the Contact us page.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp;How do I obtain information on your personal data privacy
                policy?
              </>
            }
          >
            FEED BACK POST is committed to protecting your personal information
            and to adopting a clear and transparent approach regarding the
            information we collect and how we use it. You can view our personal
            data privacy policy here.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp;How do I submit comments on my experience of using the
                website or suggest improvements?
              </>
            }
          >
            We place great importance on feedback from our users with a view to
            improving users' experience of our services. Please send us any
            comments via our online form.
          </MDBAccordionItem>
          <MDBAccordionItem
            collapseId={3}
            headerTitle={
              <>
                <MDBIcon
                  fas
                  icon="question-circle"
                  className="question-circle"
                />{" "}
                &nbsp;How do I submit comments on my experience of using the
                mobile app or suggest improvements?
              </>
            }
          >
            We place great importance on feedback from our users with a view to
            improving users' experience of our services. Please send us any
            comments via our online form, specifying whether you use the iOS or
            Android app.
          </MDBAccordionItem>
        </MDBAccordion>

        <p className="for_resturant">
          Your questions about the website and/or your MICHELIN Guide account
        </p>
        <DownloadApp />
      </div>
    </>
  );
}
