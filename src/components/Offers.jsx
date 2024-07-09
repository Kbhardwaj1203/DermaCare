import { useState, useEffect } from 'react'

const OfferCard = ({ image, title, description, code }) => (
  <div className="offer-card fade-in">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="promo-code">Use code: <strong>{code}</strong></p>
  </div>
)

const Offers = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchOffers = async () => {
      const dummyOffers = [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
          title: 'Summer Skin Sale',
          description: 'Get 20% off on all sunscreens and after-sun products',
          code: 'SUMMER20'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
          title: 'New Customer Special',
          description: 'Receive a free moisturizer with your first purchase over $50',
          code: 'WELCOME50'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a',
          title: 'Bundle and Save',
          description: 'Buy any 3 products and get 15% off your entire order',
          code: 'BUNDLE15'
        }
      ]
      setOffers(dummyOffers)
    }

    fetchOffers()
  }, [])

  return (
    <div className="offers">
      <h2 className="slide-in">Current Offers</h2>
      <div className="offers-grid">
        {offers.map((offer) => (
          <OfferCard key={offer.id} {...offer} />
        ))}
      </div>
    </div>
  )
}

export default Offers