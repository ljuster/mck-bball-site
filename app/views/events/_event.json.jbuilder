json.extract! event, :id, :name, :starts_at, :ends_at, :cost, :created_at, :updated_at
json.url event_url(event, format: :json)
