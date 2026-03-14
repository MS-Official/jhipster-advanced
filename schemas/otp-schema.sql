create table otp_policy (
  id bigint generated always as identity primary key,
  purpose varchar(50) not null,
  ttl_seconds integer not null,
  max_attempts integer not null,
  max_resends integer not null,
  cooldown_seconds integer not null,
  enabled boolean not null
);

create table otp_request (
  id bigint generated always as identity primary key,
  reference_id varchar(100) not null unique,
  tenant_code varchar(30),
  user_login varchar(50),
  channel varchar(20) not null,
  purpose varchar(50) not null,
  target_value varchar(255) not null,
  code_hash varchar(255) not null,
  state varchar(20) not null,
  sent_at timestamp,
  expires_at timestamp not null,
  verified_at timestamp,
  attempts integer not null default 0,
  resend_count integer not null default 0,
  policy_id bigint not null references otp_policy(id)
);

create table otp_attempt (
  id bigint generated always as identity primary key,
  otp_request_id bigint not null references otp_request(id),
  attempted_at timestamp not null,
  result varchar(20) not null,
  source_ip varchar(64),
  device_info varchar(255)
);

create table verified_action (
  id bigint generated always as identity primary key,
  otp_request_id bigint not null references otp_request(id),
  action_key varchar(100) not null,
  verified_at timestamp not null,
  actor varchar(100)
);
