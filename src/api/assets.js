/**
 * An asset is a type of value that can be issued on a blockchain. All units of
 * a given asset are fungible. Units of an asset can be transacted directly
 * between parties without the involvement of the issuer.
 *
 * @typedef {Object} Asset
 * @global
 *
 * @property {String} id
 * Globally unique identifier of the asset.
 * Asset specifies the asset id as the hash of:
 * - the asset's issuance program
 * - the core's VM version
 * - the hash of asset definition
 *
 * @property {String} alias
 * User specified, unique identifier in one Kusk node.
 *
 * @property {String} issuanceProgram
 *
 * @property {Key[]} keys
 * The list of keys used to issue units of the asset.
 *
 * @property {Number} quorum
 * The number of signatures required to issue new units of the asset.
 *
 * @property {Object} defintion
 * User-specified, arbitrary/unstructured data visible across Kusk
 * blockchain networks. assets specify the definition in their
 * issuance programs, rendering the definition immutable.
 */

/**
 * API for interacting with {@link Asset assets}.
 *
 * @module AssetsApi
 */
const assetsApi = (connection) => {

  /**
   * @typedef {Object} createRequest
   *
   * @property {String} [alias]
   * User specified, unique identifier.
   *
   * @property {Object} [defintion]
   * User-specified, arbitrary/unstructured data visible across blockchain networks.
   *
   * @property {String[]} root_xpubs
   * Optional. The list of keys used to create the asset.
   *
   * @property {Number} quorum
   * Optional. the default value is 1, threshold of keys that must sign a transaction to spend asset units controlled by the account.
   *
   * @property {String} [issuance_program]
   * Optional. User-specified, contract program.
   *
   */

  return {
    /**
     * Get asset by the asset id.
     *
     * @param {module:AssetsApi~id} id - Asset id.
     * @returns {Promise<Asset>} target asset.
     */
    list: (id) => connection.request(`/q/asset?id=${id}`, '', 'GET'),

    /**
     * Get All Asset.
     *
     * @param {module:AssetsApi~id} id - Asset id.
     * @returns {Promise<Asset>} target asset.
     */
    listAll: () => connection.request('/q/assets', {}),

  }
}

export default assetsApi
