import type { Certification } from "../types/certifications"

/**
 * Trademark and copyright registrations. They share the credential shape
 * rendered by `CertificationItem`, but live in their own section since they
 * certify ownership of intellectual property rather than earned skills.
 */
export const INTELLECTUAL_PROPERTY: Certification[] = []
