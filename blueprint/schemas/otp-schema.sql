CREATE TABLE tenant (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(30) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    active BOOLEAN NOT NULL
);

CREATE TABLE user_profile (
    id BIGSERIAL PRIMARY KEY,
    tenant_id BIGINT NOT NULL REFERENCES tenant(id),
    login VARCHAR(50) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(254) NOT NULL,
    phone_number VARCHAR(50),
    status VARCHAR(20) NOT NULL
);

CREATE TABLE otp_policy (
    id BIGSERIAL PRIMARY KEY,
    purpose VARCHAR(50) NOT NULL,
    ttl_seconds INTEGER NOT NULL,
    max_attempts INTEGER NOT NULL,
    max_resends INTEGER NOT NULL,
    cooldown_seconds INTEGER NOT NULL,
    enabled BOOLEAN NOT NULL
);

CREATE TABLE otp_request (
    id BIGSERIAL PRIMARY KEY,
    user_profile_id BIGINT REFERENCES user_profile(id),
    reference_id VARCHAR(100) NOT NULL UNIQUE,
    channel VARCHAR(10) NOT NULL,
    purpose VARCHAR(50) NOT NULL,
    target_value VARCHAR(255) NOT NULL,
    code_hash VARCHAR(255) NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    sent_at TIMESTAMP WITH TIME ZONE,
    verified_at TIMESTAMP WITH TIME ZONE,
    attempts INTEGER NOT NULL DEFAULT 0,
    resend_count INTEGER NOT NULL DEFAULT 0,
    state VARCHAR(20) NOT NULL
);

CREATE TABLE otp_attempt (
    id BIGSERIAL PRIMARY KEY,
    otp_request_id BIGINT NOT NULL REFERENCES otp_request(id) ON DELETE CASCADE,
    attempt_no INTEGER NOT NULL,
    attempted_at TIMESTAMP WITH TIME ZONE NOT NULL,
    result VARCHAR(50) NOT NULL,
    source_ip VARCHAR(64),
    device_info VARCHAR(255)
);

CREATE INDEX idx_otp_request_reference_id ON otp_request(reference_id);
CREATE INDEX idx_otp_request_state_expires_at ON otp_request(state, expires_at);
CREATE INDEX idx_otp_attempt_request_id ON otp_attempt(otp_request_id);
