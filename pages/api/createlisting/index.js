import client from '../../../database/index.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await client.query(
      `INSERT INTO listings (
        attended,
        gated,
        electric_charger,
        garage,
        always_available,
        high_clearance,
        description,
        special_information,
        image_id,
        minimum_stay,
        maximum_stay,
        short_term_rate,
        long_term_rate,
        user_id,
        type,
        location_id,
        first_available,
        last_available,
        lat,
        lng,
        address,
        coordinates,
        first_available_timestamptz,
        last_available_timestamptz
      ) VALUES (
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7,
          $8,
          $9,
          $10,
          $11,
          $12,
          $13,
          2,
          $14,
          $15,
          $16,
          $17,
          $18,
          $19,
          $20,
          ST_SetSRID(ST_POINT($21, $22), 4326),
          $23,
          $24
        ) RETURNING *`,
          [req.body.attended,
          req.body.gated,
          req.body.electric_charger,
          req.body.garage,
          req.body.always_available,
          req.body.high_clearance,
          req.body.description,
          req.body.special_information,
          req.body.image_id,
          req.body.minimum_stay,
          req.body.maximum_stay,
          req.body.short_term_rate,
          req.body.long_term_rate,
          req.body.type,
          req.body.location_id,
          req.body.first_available,
          req.body.last_available,
          req.body.lat,
          req.body.lng,
          req.body.address,
          req.body.lng_p,
          req.body.lat_p,
          req.body.first_available_tz,
          req.body.last_available_tz
        ]
      )
    res.send(result.rows[0])
  }
}